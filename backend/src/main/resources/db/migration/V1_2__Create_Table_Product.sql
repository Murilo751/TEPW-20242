CREATE TABLE public.tb_product (
	id int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	email varchar(255) NULL,
	login varchar(255) NULL UNIQUE,
	"name" varchar(150) NOT NULL,
	"password" varchar(255) NULL,
	CONSTRAINT tb_product_pkey PRIMARY KEY (id)
);