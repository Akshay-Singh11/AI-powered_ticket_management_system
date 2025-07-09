import { inngest } from "../client";
import User from "../models/user.js";

export const onUserSignup = inngest.createFunction(
    {id:"on-user-signup",retries:5},
    {event:"user/signup"},
    async({event,step})  => {
        try{
            const{email}=event.data;
            await step.run("get-user-email",async()=>{
                const user.findOne({email}).exec();
            })
        }
        catch(error){

        }
    }
)