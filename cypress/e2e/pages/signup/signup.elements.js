export class SignupElements{
    static get textboxes(){
        return{
            get usernam(){
                return cy.get('input#loginusername');
            },
            get password(){
                return cy.get('input#loginpassword');
            },
        };
    }
    static get buttons(){
        return{
            get close(){
                return cy.contains('button', 'Close').eq(1);
            },
            get signup(){
                return cy.contains('button', 'Sign up');
            }
        }
    }
}