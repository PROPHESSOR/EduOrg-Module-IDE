/* global menuAdd, menuBarAdd, menuBarShow */

menuAdd("file", "Создать проект", /* Bar.File.createProject() */alert);
menuBarAdd("bar", "Файл", "file");
menuBarShow("bar");