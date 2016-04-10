<?php

class erLhcoreClassThemeValidator
{
    public static function validateAdminTheme(erLhAbstractModelAdminTheme & $clickform)
    {
        $definition = array(
            'Name' => new ezcInputFormDefinitionElement(
                ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw'
            ),
            'header_content' => new ezcInputFormDefinitionElement(
                ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw'
            ),
            'header_css' => new ezcInputFormDefinitionElement(
                ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw'
            ),
            // Resources         
            'static_content_name' => new ezcInputFormDefinitionElement(
                ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw', null, FILTER_REQUIRE_ARRAY
            ),
            'static_content_hash' => new ezcInputFormDefinitionElement(
                ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw', null, FILTER_REQUIRE_ARRAY
            ),
            'static_js_content_name' => new ezcInputFormDefinitionElement(
                ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw', null, FILTER_REQUIRE_ARRAY
            ),
            'static_js_content_hash' => new ezcInputFormDefinitionElement(
                ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw', null, FILTER_REQUIRE_ARRAY
            ),
            'static_css_content_name' => new ezcInputFormDefinitionElement(
                ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw', null, FILTER_REQUIRE_ARRAY
            ),
            'static_css_content_hash' => new ezcInputFormDefinitionElement(
                ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw', null, FILTER_REQUIRE_ARRAY
            ),
        );
        
        $form = new ezcInputForm( INPUT_POST, $definition );
        $Errors = array();
        
        $currentUser = erLhcoreClassUser::instance();
			
		if (!isset($_POST['csfr_token']) || !$currentUser->validateCSFRToken($_POST['csfr_token'])) {
			$Errors[] = erTranslationClassLhTranslation::getInstance()->getTranslation('icclicktocallform/form','Invalid CSRF token!');
		}
        
        if (!$form->hasValidData( 'Name' ) || $form->Name == '') {
            $Errors['Name'] = erTranslationClassLhTranslation::getInstance()->getTranslation('icclicktocallform/form','Please enter a name');
        } else {
            $clickform->name = $form->Name;
        }
        
        if ($form->hasValidData( 'header_content' )) {
            $clickform->header_content = $form->header_content;
        }
        
        if ($form->hasValidData( 'header_css' )) {
            $clickform->header_css = $form->header_css;
        }

        $resourcesArray = array (
            'static_content',
            'static_js_content',
            'static_css_content'
        );
        
        $supportedExtensions = array ('zip','doc','docx','ttf','pdf','xls','ico','gif','xlsx','jpg','jpeg','png','bmp','rar','7z','css','js','eot','woff','woff2','svg');
        
        // Validate resources
        foreach ($resourcesArray as $resource) {
            if ( $form->hasValidData( $resource . '_hash' ) && !empty($form->{$resource . '_hash'})) {
                
                $customFields = $currentStaticResources = $clickform->{$resource . '_array'};
                                
                foreach ($form->{ $resource . '_hash' } as $key => $customFieldType) {
                    if (!erLhcoreClassSearchHandler::isFile($resource . '_file_' . $key, $supportedExtensions) && !isset($currentStaticResources[$key]['file']) ) {                  
                        $Errors[$resource . '_file_' . $key] = erTranslationClassLhTranslation::getInstance()->getTranslation('icclicktocallform/form','File not chosen for') . (isset($form->{$resource .'_name'}[$key]) ? ' - '.htmlspecialchars($form->{$resource .'_name'}[$key]) : '');
                    }
                }
    
                // If there is no errors upload files
                if (empty($Errors)){
                    foreach ($form->{$resource . '_hash'} as $key => $customFieldType) {
                        $customFields[$key]['name'] = $form->{$resource .'_name'}[$key];
                        $customFields[$key]['hash'] = $key;
                                            
                        if (erLhcoreClassSearchHandler::isFile($resource . '_file_' . $key, $supportedExtensions)) {     
    
                            // Check there is already uploaded file and remove it
                            $clickform->removeResource($resource,$key);
                            
                            // Store new file if required
                            $dir = 'var/storageadmintheme/' . date('Y') . 'y/' . date('m') . '/' . date('d') .'/' . $clickform->id . '/';  

                            erLhcoreClassChatEventDispatcher::getInstance()->dispatch('theme.temppath',array('dir' => & $dir, 'storage_id' => $clickform->id));
                            
                            erLhcoreClassFileUpload::mkdirRecursive( $dir );
                            $customFields[$key]['file'] = erLhcoreClassSearchHandler::moveUploadedFile($resource . '_file_' . $key, $dir . '/','.' );
                            $customFields[$key]['file_dir'] = $dir;
                        }
                    }
                    
                    $clickform->$resource = json_encode($customFields,JSON_HEX_APOS);
                }         
               
            } else {
                $clickform->$resource = '';
            }
        }
        
        return $Errors;
    }
}