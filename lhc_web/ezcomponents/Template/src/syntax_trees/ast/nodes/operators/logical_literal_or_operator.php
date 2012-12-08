<?php
/**
 * File containing the ezcTemplateLogicalLiteralOrOperatorAstNode class
 *
 * @package Template
 * @version 1.4.2
 * @copyright Copyright (C) 2005-2009 eZ Systems AS. All rights reserved.
 * @license http://ez.no/licenses/new_bsd New BSD License
 * @access private
 */
/**
 * Represents the PHP logical literal or operator 'or'
 *
 * @package Template
 * @version 1.4.2
 * @access private
 */
class ezcTemplateLogicalLiteralOrOperatorAstNode extends ezcTemplateBinaryOperatorAstNode
{
    /**
     * Returns a text string representing the PHP operator.
     * @return string
     */
    public function getOperatorPHPSymbol()
    {
        return 'or';
    }
}
?>
