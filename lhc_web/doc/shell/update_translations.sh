#!/bin/sh

if [ ! -f "index.php" -a \
     ! -d "design" -a \
     ! -d "lib" -a \
     ! -d "pos" -a \
     ! -d "modules" ] ; then
     echo "You seem to be in the wrong directory"
     echo "Place yourself in the LHC root directory and run ./doc/shell/update_translations.sh"
     exit 1
fi

echo "Updating LT translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/lt?file=1 > translations/lt_LT/translation.ts

echo "Updating fr_FR translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/fr?file=1 > translations/fr_FR/translation.ts

echo "Updating zh_ZH translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/zh?file=1 > translations/zh_ZH/translation.ts

echo "Updating ru_RU translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/ru?file=1 > translations/ru_RU/translation.ts

echo "Updating pt_BR translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/pt_BR?file=1 > translations/pt_BR/translation.ts

echo "Updating pl_PL translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/pl_PL?file=1 > translations/pl_PL/translation.ts

echo "Updating no_NO translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/nb?file=1 > translations/no_NO/translation.ts

echo "Updating it_IT translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/it?file=1 > translations/it_IT/translation.ts

echo "Updating es_MX translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/es?file=1 > translations/es_MX/translation.ts

echo "Updating de_DE translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/de?file=1 > translations/de_DE/translation.ts

echo "Updating cs_CS translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/cs?file=1 > translations/cs_CS/translation.ts

echo "Updating ar_EG translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/ar_EG?file=1 > translations/ar_EG/translation.ts

echo "Updating tr_TR translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/tr?file=1 > translations/tr_TR/translation.ts

echo "Updating hr_HR translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/hr?file=1 > translations/hr_HR/translation.ts

echo "Updating nl_NL translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/nl?file=1 > translations/nl_NL/translation.ts

echo "Updating vi_VN translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/vi?file=1 > translations/vi_VN/translation.ts

echo "Updating id_ID translations"
curl -L --user $1:$2 -X GET https://www.transifex.com/api/2/project/live-helper-chat/resource/translation_webts/translation/id?file=1 > translations/id_ID/translation.ts