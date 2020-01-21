# boomberman - Смс бомбер

Программа которая рассылает случайные сообщения на указанный номер. 
Принцип ее работы заключается в том чтобы посылать http запросы в различные открытые интернет сервисы. 
Программа написана на nodejs (но хотелось бы python2). Список интернет сервисов которые она использует:

* http://dom.ru/?version=71 -  наилучший открытый интернет сервис для смс бомбера
* http://obshaga.ru?oid=4&rid=824
* https://lenta.com/api/v1/authentication/requestValidationCode
* https://www.ozon.ru/api/composer-api.bx/_action/fastEntry
* https://qlean.ru/clients-api/v2/sms_codes/auth/request_code
* https://www.citilink.ru/registration/confirm/phone/
* и так далее

Список будет пополнятся в дальнейшем. Сервис работает в 16 потоков и в каждом потоке отправляется 30 запросов. 


Если у вас возникли какие то проблемы, или у вас другие предложения, вы можете обратиться нашему боту @bomermansuper_bot. 
Новости вы можете узнавать на нашем канале @BOOmBerMANdIscUs.
