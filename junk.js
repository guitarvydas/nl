var junk = 
(
    {

	TopLevel : function (_x) { 
	    _ruleEnter ("TopLevel");

	    var x = _x._glue ();
	    var _result = `${x}`; 
	    _ruleExit ("TopLevel");
	    return _result; 
	},
        
	ConstDeclaration : function (_kconst,_ident,_kto,_expression) { 
	    _ruleEnter ("ConstDeclaration");

	    var kconst = _kconst._glue ();
	    var ident = _ident._glue ();
	    var kto = _kto._glue ();
	    var expression = _expression._glue ();
	    var _result = `${kconst}${ident}${kto}${expression}`; 
	    _ruleExit ("ConstDeclaration");
	    return _result; 
	},
        
	FunctionDeclaration : function (_kfn,_ident,_Formals,_Block) { 
	    _ruleEnter ("FunctionDeclaration");

	    var kfn = _kfn._glue ();
	    var ident = _ident._glue ();
	    var Formals = _Formals._glue ();
	    var Block = _Block._glue ();
	    var _result = `${kfn}${ident}${Formals}${Block}`; 
	    _ruleExit ("FunctionDeclaration");
	    return _result; 
	},
        
	Formals : function (_ident) { 
	    _ruleEnter ("Formals");

	    var ident = _ident._glue ().join ('');
	    var _result = `${ident}`; 
	    _ruleExit ("Formals");
	    return _result; 
	},
        
	Primary_number : function (_digits) { 
	    _ruleEnter ("Primary_number");

	    var digits = _digits._glue ().join ('');
	    var _result = `${digits}`; 
	    _ruleExit ("Primary_number");
	    return _result; 
	},
        
	Primary_arrayliteral : function (_karr,_Expressions,_kend) { 
	    _ruleEnter ("Primary_arrayliteral");

	    var karr = _karr._glue ();
	    var Expressions = _Expressions._glue ();
	    var kend = _kend._glue ();
	    var _result = `${karr}${Expressions}${commas}${kend}`; 
	    _ruleExit ("Primary_arrayliteral");
	    return _result; 
	},
        
	Expression_fieldaccess : function (_e1,_op,_e2) { 
	    _ruleEnter ("Expression_fieldaccess");

	    var e1 = _e1._glue ();
	    var op = _op._glue ();
	    var e2 = _e2._glue ();
	    var _result = `${e1}${op}${e2}`; 
	    _ruleExit ("Expression_fieldaccess");
	    return _result; 
	},
        
	Expression_operation : function (_e1,_op,_e2) { 
	    _ruleEnter ("Expression_operation");

	    var e1 = _e1._glue ();
	    var op = _op._glue ();
	    var e2 = _e2._glue ();
	    var _result = `${e1}${op}${e2}`; 
	    _ruleExit ("Expression_operation");
	    return _result; 
	},
        
	Expression_functioncall : function (_kcall,_Formals,_kend) { 
	    _ruleEnter ("Expression_functioncall");

	    var kcall = _kcall._glue ();
	    var Formals = _Formals._glue ().join ('');
	    var kend = _kend._glue ();
	    var _result = `${e1}${kcall}${Formals}${kend`; 
	    _ruleExit ("Expression_functioncall");
	    return _result; 
	},
        
	Expression_primary : function (_Primary) { 
	    _ruleEnter ("Expression_primary");

	    var Primary = _Primary._glue ();
	    var _result = `${Primary}`; 
	    _ruleExit ("Expression_primary");
	    return _result; 
	},
        
	Operator : function (_k) { 
	    _ruleEnter ("Operator");

	    var k = _k._glue ();
	    var _result = `${k}`; 
	    _ruleExit ("Operator");
	    return _result; 
	},
        
	Phrase : function (_x) { 
	    _ruleEnter ("Phrase");

	    var x = _x._glue ();
	    var _result = `${x}`; 
	    _ruleExit ("Phrase");
	    return _result; 
	},
        
	IfPhrase : function (_kif,_Expression,_Block) { 
	    _ruleEnter ("IfPhrase");

	    var kif = _kif._glue ();
	    var Expression = _Expression._glue ();
	    var Block = _Block._glue ();
	    var _result = `${kif}${Expression}${Block}`; 
	    _ruleExit ("IfPhrase");
	    return _result; 
	},
        
	ReturnPhrase : function (_kreturn,_Expression) { 
	    _ruleEnter ("ReturnPhrase");

	    var kreturn = _kreturn._glue ();
	    var Expression = _Expression._glue ();
	    var _result = `${kreturn}${Expression}`; 
	    _ruleExit ("ReturnPhrase");
	    return _result; 
	},
        
	Block : function (_kdo,_Phrase,_kend) { 
	    _ruleEnter ("Block");

	    var kdo = _kdo._glue ();
	    var Phrase = _Phrase._glue ().join ('');
	    var kend = _kend._glue ();
	    var _result = `${kdo}${Phrase}${kend}`; 
	    _ruleExit ("Block");
	    return _result; 
	},
        
	FieldName : function (_ident) { 
	    _ruleEnter ("FieldName");

	    var ident = _ident._glue ();
	    var _result = `${ident}`; 
	    _ruleExit ("FieldName");
	    return _result; 
	},
        
	ident : function (_identFirst,_identRest) { 
	    _ruleEnter ("ident");

	    var identFirst = _identFirst._glue ();
	    var identRest = _identRest._glue ().join ('');
	    var _result = `${identFirst}${identRest}`; 
	    _ruleExit ("ident");
	    return _result; 
	},
        
	identFirst : function (_c) { 
	    _ruleEnter ("identFirst");

	    var c = _c._glue ();
	    var _result = `${c}`; 
	    _ruleExit ("identFirst");
	    return _result; 
	},
        
	identRest : function (_c) { 
	    _ruleEnter ("identRest");

	    var c = _c._glue ();
	    var _result = `${c}`; 
	    _ruleExit ("identRest");
	    return _result; 
	},
        
	_terminal: function () { return this.sourceString; },
	_iter: function (...children) { return children.map(c => c._glue ()); }
    })
;
