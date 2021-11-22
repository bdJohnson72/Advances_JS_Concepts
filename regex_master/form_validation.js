class Form_Validation{

    validatePhone(phoneNumber){
        const phoneExpression = /\d{10}/
        return phoneExpression.test(phoneNumber)
    }
}

export {Form_Validation}