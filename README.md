# boomberman - Смс бомбер

Программа которая рассылает случайные сообщения на указанный номер. 
Принцип ее работы заключается в том чтобы посылать http запросы в различные открытые интернет сервисы. 
Программа написана на nodejs (но хотелось бы python2). Список интернет сервисов которые она будет использовать:

* http://dom.ru/?version=71 -  наилучший открытый интернет сервис для смс бомбера
* http://obshaga.ru?oid=4&rid=824
* https://lenta.com/api/v1/authentication/requestValidationCode
* https://www.ozon.ru/api/composer-api.bx/_action/fastEntry
* https://qlean.ru/clients-api/v2/sms_codes/auth/request_code
* https://www.citilink.ru/registration/confirm/phone/
* и так далее

Список будет пополнятся в дальнейшем. Планируется что сервис будет работать в 16 потоков и в каждом потоке отправляется 30 запросов. 

# Как запустить:

```git clone https://github.com/mad-lolzy/boomberman.git```


```pkg install npm```


```npm install express --save```


```npm install readline --save```


```cd boomberman```


```node boomberman.js```

В консоле появится ссылка. Нужно скопировать ссылку в адресную строку браузера и положить.


Если у вас возникли какие то проблемы, или у вас другие предложения, вы можете обратиться нашему боту @bomermansuper_bot. 
Новости вы можете узнать на нашем канале @BOOmBerMANdIscUs.
