import { AbstractControl,FormControl,ValidatorFn  } from "@angular/forms";

export function patternValidation(myRegExp:RegExp):ValidatorFn {
    return(control:AbstractControl)=>{
        const pattern=myRegExp.test(control.value)

        return pattern ? {'myRegExp':{value:control.value}} : null;
    }
    
    
}