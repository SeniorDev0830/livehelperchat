<?php

class erLhcoreClassModules{

   function __construct()
   {

   }

   public static function getModuleList()
   {
        $ModulesDir = 'modules';

        $ModuleList = array();

        $Modules = ezcBaseFile::findRecursive( $ModulesDir,array( '@module.php@' ) );

        foreach ($Modules as $ModuleInclude)
        {
            include($ModuleInclude);
            $ModuleList[str_replace('modules/','',dirname($ModuleInclude))] = array('name' => $Module['name']);
        }

        // Add extensions modules
        $cfg = erConfigClassLhConfig::getInstance();

        $extensions = $cfg->getSetting( 'site', 'extensions' );
        foreach ($extensions as $extension) {
        	$Modules = ezcBaseFile::findRecursive( "extension/{$extension}/{$ModulesDir}",array( '@module.php@' ) );
        	foreach ($Modules as $ModuleInclude)
        	{
        		include($ModuleInclude);
        		if (isset($ModuleList[str_replace("extension/{$extension}/{$ModulesDir}/",'',dirname($ModuleInclude))]['name'])){
        			$ModuleList[str_replace("extension/{$extension}/{$ModulesDir}/",'',dirname($ModuleInclude))]['name'] .= ', EX - '.$Module['name'];
        		} else {
        			$ModuleList[str_replace("extension/{$extension}/{$ModulesDir}/",'',dirname($ModuleInclude))] = array('name' => $Module['name']);
        		}
        	}
        }

        return $ModuleList ;
   }

   public static function getModuleFunctions($ModulePath)
   {
   		$FunctionListReturn = array();
   	    if (file_exists('modules/' . $ModulePath . '/module.php')) {
       		include('modules/' . $ModulePath . '/module.php');
       		$FunctionListReturn = $FunctionList;
   	    }

   	    $cfg = erConfigClassLhConfig::getInstance();
   	    // Append Override functions
   	   	$extensions = $cfg->getSetting( 'site', 'extensions' );
   	   	foreach ($extensions as $extension) {
   	   		if (file_exists("extension/{$extension}/modules/{$ModulePath}/module.php")) {
   	   			include("extension/{$extension}/modules/{$ModulePath}/module.php");
   	   			$FunctionListReturn = array_merge($FunctionListReturn,$FunctionList);
   	   		}
   	   	}

   	   	return $FunctionListReturn;
   }

   public static function getModuleName($ModuleIdentifier) {
   	 	if ($ModuleIdentifier == '*'){
   	 		return erTranslationClassLhTranslation::getInstance()->getTranslation('permission/editrole','All modules');
   	 	}

   	 	$ModuleName = '';
   	 	if (file_exists('modules/' . $ModuleIdentifier . '/module.php')){
   	 		include('modules/' . $ModuleIdentifier . '/module.php');
   	 		$ModuleName = $Module['name'];
   	 	}

   	 	$cfg = erConfigClassLhConfig::getInstance();
   	 	$extensions = $cfg->getSetting( 'site', 'extensions' );
   	 	foreach ($extensions as $extension) {
   	 		if (file_exists("extension/{$extension}/modules/{$ModuleIdentifier}/module.php")) {
   	 			include("extension/{$extension}/modules/{$ModuleIdentifier}/module.php");
   	 			if (!empty($ModuleName)) {
   	 				$ModuleName .= ', EX - '.$Module['name'];
   	 			} else {
   	 				$ModuleName = $Module['name'];
   	 			}
   	 		}
   	 	}

   	 	return $ModuleName;
   }

   public static function getFunctionName($ModuleIdentifier,$FunctionName) {

   	 	if ($FunctionName == '*') {
   	 		return erTranslationClassLhTranslation::getInstance()->getTranslation('permission/editrole','All functions');
   	 	}

   	 	$translatedFunctionName = '';

   	 	if (file_exists('modules/' . $ModuleIdentifier . '/module.php')){
   	 		include('modules/' . $ModuleIdentifier . '/module.php');
   	 		$translatedFunctionName = (isset($FunctionList[$FunctionName]['explain'])) ? $FunctionList[$FunctionName]['explain'] : '';
   	 	}

   	 	$cfg = erConfigClassLhConfig::getInstance();
   	 	$extensions = $cfg->getSetting( 'site', 'extensions' );
   	 	foreach ($extensions as $extension) {
   	 		if (file_exists("extension/{$extension}/modules/{$ModuleIdentifier}/module.php")) {
   	 			include("extension/{$extension}/modules/{$ModuleIdentifier}/module.php");
   	 			if (isset($FunctionList[$FunctionName]['explain'])){
	   	 			if (!empty($translatedFunctionName)) {
	   	 				$translatedFunctionName .= ', EX - '.$FunctionList[$FunctionName]['explain'];
	   	 			} else {
	   	 				$translatedFunctionName = $FunctionList[$FunctionName]['explain'];
	   	 			}
   	 			}
   	 		}
   	 	}

   	 	return $translatedFunctionName;
   }

}


?>