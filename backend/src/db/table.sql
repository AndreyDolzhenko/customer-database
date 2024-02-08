 DROP TABLE "positions"; // удаление таблицы

 ALTER TABLE products RENAME COLUMN product_no TO product_number; // Переименовать столбец

 ALTER TABLE products ALTER COLUMN price TYPE numeric(10,2); // изменить тип данных в столбце

// Создание таблицы

CREATE TABLE companies (code_companie serial PRIMARY KEY, name_companie character varying(50));
CREATE TABLE positions (code_position serial PRIMARY KEY, name_position character varying(50));
CREATE TABLE subdivisions (code_subdivision serial PRIMARY KEY, name_subdivision character varying(50));
 
 // Заполнение таблицы

INSERT INTO companies (name_companie) VALUES ('Мечта'), ('Загадка'), ('New Look');
INSERT INTO positions (name_position) VALUES ('Бухгалтер'), ('Руководитель дивизиона'), ('Торговый представитель'), ('Оператор');
INSERT INTO subdivisions (name_subdivision) VALUES ('Администрация'), ('Крупный бизнес'), ('Малый бизнес');

CREATE TABLE employees (
	code_employees serial PRIMARY KEY, 
	code_companie integer REFERENCES companies(code_companie), 
	code_position integer REFERENCES positions(code_position),
 	code_subdivision integer REFERENCES subdivisions(code_subdivision), 
	the_number_of_employees integer NOT NULL, 
	wage numeric(6,2) NOT NULL);

    CREATE TABLE employees (code_employees serial PRIMARY KEY, code_companie integer REFERENCES companies(code_companie), code_position integer REFERENCES positions(code_position), code_subdivision integer REFERENCES subdivisions(code_subdivision), the_number_of_employees integer NOT NULL, wage numeric(6,2) NOT NULL);

    INSERT INTO employees (code_companie, code_position, code_subdivision, employee_name, wage) VALUES (3, 2, 1, 'Крутов Олег Игоревич', 270000.00), (3, 1, 1, 'Денежка Мария Михайловна', 150000.00), (1, 3, 2, 'Успехов Пётр Сергеевич', 120000.00), (1, 3, 3, 'Малышкина Оксана Владимировна', 90000.00), (2, 4, 3, 'Заскокина Людмила Филипповна', 78000.00);

    ALTER TABLE employees RENAME COLUMN code_employees TO id;
    ALTER TABLE employees ALTER COLUMN employee_name TYPE character varying(50);
    ALTER TABLE employees ALTER COLUMN wage TYPE numeric(12,2) NOT NULL;

	INSERT INTO employees (code_companie, code_position, code_subdivision, employee_name, wage) VALUES (3, 2, 1, 'Крутов Олег Игоревич', 270000.00), (3, 1, 1, 'Денежка Мария Михайловна', 150000.00), (1, 3, 2, 'Успехов Пётр Сергеевич', 120000.00), (1, 3, 3, 'Малышкина Оксана Владимировна', 90000.00), (2, 4, 3, 'Заскокина Людмила Филипповна', 78000.00);

	SELECT e.id, c.name_companie, p.name_position, s.name_subdivision, e.employee_name, e.wage FROM employees AS e JOIN companies AS c ON e.code_companie=c.code_companie JOIN positions AS p ON e.code_position=p.code_position JOIN subdivisions AS s ON e.code_subdivision=s.code_subdivision;