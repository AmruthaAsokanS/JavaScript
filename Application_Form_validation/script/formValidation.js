function validate()
{

    // name validation
    var name = document.getElementById('nameId').value;
    if(name == "" || name == null)
    {
        document.getElementById('nameId').style.border = "2px solid red"
        document.getElementById('nameReqId').style.visibility = "visible"
    }
    else
    {
        document.getElementById('nameId').style.border = "2px solid darkgray"
        document.getElementById('nameReqId').style.visibility = "hidden" 

        var nameregex = /^[a-zA-Z\s]+$/;
        if(nameregex.test(name))
        {
            document.getElementById('nameId').style.border = "2px solid darkgray"
            document.getElementById('nameValidId').style.visibility = "hidden" 
        }
        else{
            document.getElementById('nameId').style.border = "2px solid red"
            document.getElementById('nameValidId').style.visibility = "visible"
        }
    }

    // father's name validation
    var fatherName = document.getElementById('fatherNameId').value;
    if(fatherName == "" || fatherName == null)
    {
        document.getElementById('fatherNameId').style.border = "2px solid red"
        document.getElementById('fatherNameReqId').style.visibility = "visible"
    }
    else
    {
        document.getElementById('fatherNameId').style.border = "2px solid darkgray"
        document.getElementById('fatherNameReqId').style.visibility = "hidden" 

        var fathernameregex = /^[a-zA-Z\s]+$/;
        if(fathernameregex.test(fatherName))
        {
            document.getElementById('fatherNameId').style.border = "2px solid darkgray"
            document.getElementById('fatherNameValidId').style.visibility = "hidden" 
        }
        else{
            document.getElementById('fatherNameId').style.border = "2px solid red"
            document.getElementById('fatherNameValidId').style.visibility = "visible"
        }
    }

    // email validation
    var email = document.getElementById('emailId').value;
    if(email == "" || email == null)
    {
        document.getElementById('emailId').style.border = "2px solid red"
        document.getElementById('emailReqId').style.visibility = "visible"
    }
    else
    {
        document.getElementById('emailId').style.border = "2px solid darkgray"
        document.getElementById('emailReqId').style.visibility = "hidden" 

        var emailregex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
        if(emailregex.test(email))
        {
            document.getElementById('emailId').style.border = "2px solid darkgray"
            document.getElementById('emailValidId').style.visibility = "hidden" 
        }
        else{
            document.getElementById('emailId').style.border = "2px solid red"
            document.getElementById('emailValidId').style.visibility = "visible"
        }
    }

    // date of birth validation
    var dob = document.getElementById('dobId').value; 
    if(dob == "" || dob == null)
    {
        document.getElementById('dobId').style.border = "2px solid red"
        document.getElementById('dobReqId').style.visibility = "visible"
    }
    else
    {
        document.getElementById('dobId').style.border = "2px solid darkgray"
        document.getElementById('dobReqId').style.visibility = "hidden" 

        var dobregex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
        if(dobregex.test(dob))
        {
            document.getElementById('dobId').style.border = "2px solid darkgray"
            document.getElementById('dobValidId').style.visibility = "hidden" 
        }
        else{
            document.getElementById('dobId').style.border = "2px solid red"
            document.getElementById('dobValidId').style.visibility = "visible"
        }
    }

    // mobile number validation
    var mobile = document.getElementById('mobileId').value;
    if(mobile == "" || mobile == null)
    {
        document.getElementById('mobileId').style.border = "2px solid red"
        document.getElementById('mobileReqId').style.visibility = "visible"
    }
    else
    {
        document.getElementById('mobileId').style.border = "2px solid darkgray"
        document.getElementById('mobileReqId').style.visibility = "hidden" 

        var mobileregex = /^[6-9]\d{9}$/;
        if(mobileregex.test(mobile))
        {
            document.getElementById('mobileId').style.border = "2px solid darkgray"
            document.getElementById('mobileValidId').style.visibility = "hidden" 
        }
        else{
            document.getElementById('mobileId').style.border = "2px solid red"
            document.getElementById('mobileValidId').style.visibility = "visible"
        }
    }
    
    // Current Address 
    // current address line1 validation
    var address1 = document.getElementById('address1Id').value;
    if(address1 == "" || address1 == null)
    {
        document.getElementById('address1Id').style.border = "2px solid red"
        document.getElementById('address1ReqId').style.visibility = "visible"
    }
    else
    {
        document.getElementById('address1Id').style.border = "2px solid darkgray"
        document.getElementById('address1ReqId').style.visibility = "hidden" 
    }

    // current address line2 validation
    var address2 = document.getElementById('address2Id').value;
    if(address2 == "" || address2 == null)
    {
        document.getElementById('address2Id').style.border = "2px solid red"
        document.getElementById('address2ReqId').style.visibility = "visible"
    }
    else
    {
        document.getElementById('address2Id').style.border = "2px solid darkgray"
        document.getElementById('address2ReqId').style.visibility = "hidden" 
    }

    //city validation
    var city = document.getElementById('cityId').value;
    if(city == "" || city == null)
    {
        document.getElementById('cityId').style.border = "2px solid red"
        document.getElementById('cityReqId').style.visibility = "visible"
    }
    else
    {
        document.getElementById('cityId').style.border = "2px solid darkgray"
        document.getElementById('cityReqId').style.visibility = "hidden" 
    }

    // state validation
    var state = document.getElementById('stateId').value;
    
 
    //zipcode validation
    var zipcode = document.getElementById('zipcodeId').value;
    if(zipcode == "" || zipcode == null)
    {
        document.getElementById('zipcodeId').style.border = "2px solid red"
        document.getElementById('zipcodeReqId').style.visibility = "visible"
    }
    else
    {
        document.getElementById('zipcodeId').style.border = "2px solid darkgray"
        document.getElementById('zipcodeReqId').style.visibility = "hidden" 

        var zipcoderegex = /^[0-9]\d{5}$/;
        if(zipcoderegex.test(zipcode))
        {
            document.getElementById('zipcodeId').style.border = "2px solid darkgray"
            document.getElementById('zipcodeValidId').style.visibility = "hidden" 
        }
        else{
            document.getElementById('zipcodeId').style.border = "2px solid red"
            document.getElementById('zipcodeValidId').style.visibility = "visible"
        }
    }

    // Permanent Address
    if(document.getElementById('sameAddressId').checked == true){

        document.getElementById('address1Id1').value = document.getElementById('address1Id').value;
        document.getElementById('address1Id1').style.border = "2px solid darkgray"
        document.getElementById('address1ReqId1').style.visibility = "hidden"

        document.getElementById('address2Id1').value = document.getElementById('address2Id').value;
        document.getElementById('address2Id1').style.border = "2px solid darkgray"
        document.getElementById('address2ReqId1').style.visibility = "hidden" 

        document.getElementById('cityId1').value = document.getElementById('cityId').value;
        document.getElementById('cityId1').style.border = "2px solid darkgray"
        document.getElementById('cityReqId1').style.visibility = "hidden"

        document.getElementById('stateId1').value = document.getElementById('stateId').value;

        document.getElementById('zipcodeId1').value = document.getElementById('zipcodeId').value;
        document.getElementById('zipcodeId1').style.border = "2px solid darkgray"
        document.getElementById('zipcodeReqId1').style.visibility = "hidden" 
        document.getElementById('zipcodeValidId1').style.visibility = "hidden" 
    }
    else{
        //permanent address line1 validation
        var address1_1 = document.getElementById('address1Id1').value;
        if(address1_1 == "" || address1_1 == null)
        {
            document.getElementById('address1Id1').style.border = "2px solid red"
            document.getElementById('address1ReqId1').style.visibility = "visible"
        }
        else
        {
            document.getElementById('address1Id1').style.border = "2px solid darkgray"
            document.getElementById('address1ReqId1').style.visibility = "hidden" 
        }

        //permanent address line2 validation
        var address2_1 = document.getElementById('address2Id1').value;
        if(address2_1 == "" || address2_1 == null)
        {
            document.getElementById('address2Id1').style.border = "2px solid red"
            document.getElementById('address2ReqId1').style.visibility = "visible"
        }
        else
        {
            document.getElementById('address2Id1').style.border = "2px solid darkgray"
            document.getElementById('address2ReqId1').style.visibility = "hidden" 
        }

        // city 2 validation
        var city1 = document.getElementById('cityId1').value;
        if(city1 == "" || city1 == null)
        {
            document.getElementById('cityId1').style.border = "2px solid red"
            document.getElementById('cityReqId1').style.visibility = "visible"
        }
        else
        {
            document.getElementById('cityId1').style.border = "2px solid darkgray"
            document.getElementById('cityReqId1').style.visibility = "hidden" 
        }

        // state 2 validation
        var state1 = document.getElementById('stateId1').value;


        // zipcode 2 validation
        var zipcode1 = document.getElementById('zipcodeId1').value;
        if(zipcode1 == "" || zipcode1 == null)
        {
            document.getElementById('zipcodeId1').style.border = "2px solid red"
            document.getElementById('zipcodeReqId1').style.visibility = "visible"
        }
        else
        {
            document.getElementById('zipcodeId1').style.border = "2px solid darkgray"
            document.getElementById('zipcodeReqId1').style.visibility = "hidden" 

            var zipcode1regex = /^[0-9]\d{5}$/;
            if(zipcode1regex.test(zipcode1))
            {
                document.getElementById('zipcodeId1').style.border = "2px solid darkgray"
                document.getElementById('zipcodeValidId1').style.visibility = "hidden" 
            }
            else{
                document.getElementById('zipcodeId1').style.border = "2px solid red"
                document.getElementById('zipcodeValidId1').style.visibility = "visible"
            }
        }
    }
    
    // profile photo
    var photo = document.getElementById('profilePhotoId').value;
    if(photo == "" || photo == null)
    {
        document.getElementById('profilePhotoId').style.border = "2px solid red"
        document.getElementById('profilephotoReqId').style.visibility = "visible"
    }
    else
    {
        
        document.getElementById('profilePhotoId').style.border = "2px solid darkgray"
        document.getElementById('profilephotoReqId').style.visibility = "hidden" 
        var imageUploadregex = /(\.jpg|\.png)$/i;
        if(imageUploadregex.test(photo))
        {
            document.getElementById('profilePhotoId').style.border = "2px solid darkgray"
            document.getElementById('profilephotoValidId').style.visibility = "hidden" 
        }
        else{
            document.getElementById('profilePhotoId').style.border = "2px solid red"
            document.getElementById('profilephotoValidId').style.visibility = "visible"
        }
    }
}