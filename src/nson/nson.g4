grammar nson;

message: var_block? exp;

var_block: '<'field_list'>';

exp: string
	| number
	| date_time
	| boolean
	| custom_entity
	| name
	| reference_list
	| null;

string: STRING;

number: INT
	| FLOAT;

date_time: '/' DATE? TIME? TIMEZONE? '/';

boolean: 'true'
	| 'false';

custom_entity: '{' field_list? ','? '}';

field_list: field (',' field)*;

field: key=STRING ':' value=exp;

reference_list: '[' exp_list? ','? ']';

exp_list: exp (',' exp)*;

name: '&' string;

null: 'null';

//NAME: '&'[0-9a-zA-Z_]+;

DATE: INT '.' INT '.' INT;
TIME: INT ':' INT ':' INT;
TIMEZONE: 'UTC'? ('+'|'-')? INT;

INT: [0-9]+;

FLOAT: '-'? INT '.' INT EXP?
	| '-'? INT EXP
	| '-'? INT
	;




fragment EXP: [Ee] [+\-]? INT;

STRING: '"' (ESC|~["\\])* '"';

fragment ESC: '\\' (["\\/bfnrt]|UNICODE);
fragment UNICODE: 'u' HEX HEX HEX HEX;
fragment HEX: [0-9a-fA-F];

WS: [ \t\n\r]+ -> channel(HIDDEN);

