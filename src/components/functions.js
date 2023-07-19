import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export const DefaultSpeaking = {
    question: "This is example IELTS Speaking Task 2.\n\nDescribe a successful businessman/businesswoman that you know. You should say:\n- Who he/she is and how you know her/him;\n- What her/his business is;\n- How you think this persons's business will do in the future;\n- Why do you think he/she is successful.",
    results: {
        level: 2,
        transcription: "",
        recommendations: {
            errors: {
                stub: true,
                name: "Errors and Grammatics",
                comment: "Mistakes found:\n\n1. \"Hope you are find well.\" should be \"Hope you are doing well.\" \nMistake: tense agreement.\nExplanation: The correct way to inquire about someone's well-being is to use the present tense. \"Are you doing well?\" is the correct phrase to use.\n\n2. \"I am writing to request some time off work due to a personal matter that require my attention.\" should be \"I am writing to request some time off work due to a personal matter that requires my attention.\"\nMistake: subject-verb agreement.\nExplanation: \"Matter\" is singular, so the verb \"requires\" should also be in the singular form.\n\n3. \"I apologies for any inconvenience this may cause.\" should be \"I apologize for any inconvenience this may cause.\"\nMistake: verb form.\nExplanation: The correct verb form to use in this context is \"apologize\" in its base form.\n\n4. \"It is an important family event and I would like to celebrate this special occasion with my sister and our entire family.\" should be \"It is an important family event and I would like to celebrate this special occasion with my sister and our entire family.\"\nMistake: pronoun agreement.\nExplanation: The pronoun \"our\" should be used to show possession with both \"sister\" and \"entire family.\""
    
            },
            self: {
                name: "Improvement",
                stub: true,
                comment: "Dear Ms. Anderson,\n\nI hope this message finds you well. I am writing to formally request a period of leave from work due to a personal matter that requires my immediate attention. I apologize in advance for any inconvenience caused.\n\nThe reason for this request is that my sister, Lisa, will be getting married next month, and it is of great importance to me to be present for this joyful occasion. I believe that it is a unique event in our family's lives, and I wouldn't want to miss out on the opportunity to celebrate with my sister and our extended family.\n\nTo ensure that I can fully partake in the wedding festivities, I kindly ask for five consecutive days off, starting from the day preceding the wedding and ending two days after. This timeframe will allow me sufficient time to travel to the location, actively participate in the wedding, and then safely return home.\n\nIn my absence, I propose that my colleague, John, assumes responsibility for my tasks. He is well-acquainted with my duties and has demonstrated commendable skill in handling similar assignments in the past. I am more than willing to provide him with any necessary guidance or support before I depart.Thank you for taking the time to consider my request. I firmly believe that this period of leave will not only enable me to support my family but also enable me to recharge and return to work with renewed enthusiasm and focus.\n\nYours sincerely,\nDavid Thompson"
            },
            grammar: {
                name: "Grammar rules",
                stub: false,
                comment: "This is example response.\n\nList of Grammar Rules:\n1. Subject-Verb Agreement: Ensure that the subject and verb in a sentence agree in number and person.\n2. Comparative and Superlative Forms: Use comparative forms (e.g., \"more popular\") when comparing two things and superlative forms (e.g., \"most popular\") when comparing more than two things.\n3. Correct Use of Adjectives and Adverbs: Use adjectives to modify nouns and pronouns, and adverbs to modify verbs, adjectives, and other adverbs.\n4. Correct Use of Articles: Use the appropriate article (a, an, the) before nouns depending on whether they are specific or nonspecific.\n5. Use of Prepositions: Use prepositions to show relationships between words, such as time, location, and direction.\n6. Use of Commas in a Series: Use commas to separate items in a series or list.\n7. Use of Modals: Use modals to express possibility, necessity, permission, and obligation.\n8. Correct Use of Verb Tenses: Use the correct verb tense to match the time of the action or event."
            }
        },
        estimations: {
        cc: {
            name: "Fluence & Coherence",
            band: 6,
            stub: false,
            comment: "This is example response.\n\nThe candidate demonstrates basic fluency and coherence in their response. They clearly mention the successful businessman they know, which is their father. However, the candidate's response lacks organization and structure. There is frequent use of colloquial language and repetition of ideas. The candidate provides some information about their father's business, but it is not clearly explained. Additionally, the candidate does not provide specific details about their father's success or how they know him. The future prospects of the business are mentioned briefly, but without sufficient explanation or evidence. However, the candidate does briefly mention some qualities that contribute to their father's success such as skill acquisition, networking, and balancing personal and professional life. Overall, the response lacks depth and coherence, and there is a need for improvement in providing clear and specific information about the businessman and their business as well as providing detailed reasons for their success."
        },
        gra: {
            name: "Grammatical Range and Accuracy",
            band: 7,
            stub: false,
            comment: "This is example response.\n\nOverall, the grammatical range and accuracy in this response is quite good, with a variety of sentence structures and appropriate use of tenses. There are only a few minor errors, such as missing articles ('the government'), incorrect word choice ('conveniently' instead of 'effectively'), and a few instances of repetition. Some sentences could also be made more concise and clear. For example, instead of saying 'he created some sort of connections', it would be better to say 'he built a network of connections'. Additionally, the use of transitional phrases and connectors could be improved to enhance the coherence and cohesion of the response. Overall, the speaker demonstrates a good command of grammar and successfully conveys their ideas, but there is room for improvement in terms of precision, clarity, and sophistication of the language used."
        },
        lr: {
            name: "Lexical Resource",
            band: 5,
            stub: false,
            comment: "This is example response.\n\nThe lexical resource in this response is quite limited. The candidate demonstrates some use of vocabulary related to the topic of business, such as 'chain of supermarkets', 'property development', 'operate', 'industry', 'connections', 'surround himself with the right people', 'manage time wisely', and 'balance'. However, there are also instances of repetition and limited vocabulary, such as the repeated use of 'back in the day' and 'I think'. The response could benefit from a wider range of vocabulary and more precise word choices to convey meaning more effectively. Additionally, there are some errors in grammar, such as incorrect verb tenses ('he build' should be 'he built'). Sentences are generally coherent, but there is a lack of complexity and variety in sentence structures. Overall, while the response shows some ability to express ideas related to the topic, there is room for improvement in developing a stronger and more varied lexical resource."
        },
        ta: {
            name: "Pronunciation",
            band: 6,
            stub: false,
            comment: "This is example response.\n\nThe candidate's pronunciation is generally clear and intelligible. There are some minor issues with stress and intonation, which slightly affect the overall fluency and coherence of the speech. However, the candidate demonstrates an adequate control of vowel and consonant sounds, although there are occasional lapses in accuracy. For example, the pronunciation of 'business' sounds more like 'biss-ness'. The candidate also tends to use some filler words and hesitations, which disrupt the flow of speech. There are instances where word boundaries are not clearly separated, leading to some confusion. Additionally, the rhythm and pace of the speech could be more varied to enhance the overall delivery. However, despite these shortcomings, the candidate manages to convey their ideas effectively and make themselves understood. Overall, the candidate's pronunciation level is satisfactory, but there is room for improvement in terms of accuracy, fluency, and prosody."
        }
    }
    }
}
export const DefaultWriting = {
    results: {
        level: 3,
    question: "This is example IELTS Writing 1 question.\nYou are working for a company. You need to take some time off work and want to ask your manager about this. Write a letter to your manager. In your letter:\n• Explain why you want to take time off\n• Give details of the amount of time you need\n• Suggest how your work could be covered while you are away.\nWrite at least 150 words",
    answer: "Dear Ms. Anderson,\n\nHope you are find well. I am writing to request some time off work due to a personal matter that require my attention. I apologies for any inconvenience this may cause.\nThe reason I need time off is because my sister, Lisa, is getting married next month and I want to be present for the wedding. It is an important family event and I would like to celebrate this special occasion with my sister and our entire family. I believe it is a once-in-a-lifetime moment that I shouldn't miss.\n\nI would require a total of five days off from work, starting from the day before the wedding until two days after. This will allow me enough time to travel to the location, attend the wedding and festivities, and then return home.\nDuring my absence, I suggest that my tasks could be assigned to my colleague, John. He has a good understanding of my responsibilities and has shown great competence in handling similar tasks in the past. I will be happy to provide him with any necessary guidance or support before I leave.\n\nThank you for considering my request. I believe that taking this time off will not only allow me to be there for my family but also recharge and return to work with renewed energy and focus.\n\nYours sincerely,\nDavid Thompson",
    recommendations: {
        errors: {
            stub: false,
            name: "Errors and Grammatics",
            comment: "This is example response.\n\nMistakes found:\n\n1. \"Hope you are find well.\" should be \"Hope you are doing well.\" \nMistake: tense agreement.\nExplanation: The correct way to inquire about someone's well-being is to use the present tense. \"Are you doing well?\" is the correct phrase to use.\n\n2. \"I am writing to request some time off work due to a personal matter that require my attention.\" should be \"I am writing to request some time off work due to a personal matter that requires my attention.\"\nMistake: subject-verb agreement.\nExplanation: \"Matter\" is singular, so the verb \"requires\" should also be in the singular form.\n\n3. \"I apologies for any inconvenience this may cause.\" should be \"I apologize for any inconvenience this may cause.\"\nMistake: verb form.\nExplanation: The correct verb form to use in this context is \"apologize\" in its base form.\n\n4. \"It is an important family event and I would like to celebrate this special occasion with my sister and our entire family.\" should be \"It is an important family event and I would like to celebrate this special occasion with my sister and our entire family.\"\nMistake: pronoun agreement.\nExplanation: The pronoun \"our\" should be used to show possession with both \"sister\" and \"entire family.\""

        },
        self: {
            name: "Improvement",
            stub: false,
            comment: "This is example response.\n\nDear Ms. Anderson,\n\nI hope this message finds you well. I am writing to formally request a period of leave from work due to a personal matter that requires my immediate attention. I apologize in advance for any inconvenience caused.\n\nThe reason for this request is that my sister, Lisa, will be getting married next month, and it is of great importance to me to be present for this joyful occasion. I believe that it is a unique event in our family's lives, and I wouldn't want to miss out on the opportunity to celebrate with my sister and our extended family.\n\nTo ensure that I can fully partake in the wedding festivities, I kindly ask for five consecutive days off, starting from the day preceding the wedding and ending two days after. This timeframe will allow me sufficient time to travel to the location, actively participate in the wedding, and then safely return home.\n\nIn my absence, I propose that my colleague, John, assumes responsibility for my tasks. He is well-acquainted with my duties and has demonstrated commendable skill in handling similar assignments in the past. I am more than willing to provide him with any necessary guidance or support before I depart.Thank you for taking the time to consider my request. I firmly believe that this period of leave will not only enable me to support my family but also enable me to recharge and return to work with renewed enthusiasm and focus.\n\nYours sincerely,\nDavid Thompson"
        },
        grammar: {
            name: "Grammar rules",
            stub: false,
            comment: "This is example response.\n\nList of Grammar Rules:\n1. Subject-Verb Agreement: Ensure that the subject and verb in a sentence agree in number and person.\n2. Comparative and Superlative Forms: Use comparative forms (e.g., \"more popular\") when comparing two things and superlative forms (e.g., \"most popular\") when comparing more than two things.\n3. Correct Use of Adjectives and Adverbs: Use adjectives to modify nouns and pronouns, and adverbs to modify verbs, adjectives, and other adverbs.\n4. Correct Use of Articles: Use the appropriate article (a, an, the) before nouns depending on whether they are specific or nonspecific.\n5. Use of Prepositions: Use prepositions to show relationships between words, such as time, location, and direction.\n6. Use of Commas in a Series: Use commas to separate items in a series or list.\n7. Use of Modals: Use modals to express possibility, necessity, permission, and obligation.\n8. Correct Use of Verb Tenses: Use the correct verb tense to match the time of the action or event."
        }
    },
    estimations: {
        cc: {
            name: "Coherence & Cohesion",
            band: 7,
            stub: false,
            comment: "This is example response.\n\nOverall, the response demonstrates a good level of coherence and cohesion. The writer effectively communicates their request for time off work due to a personal matter. The response has a clear structure with an introduction, body paragraphs, and a conclusion. The writer's ideas are logically organized, making it easy for the reader to follow along.   The response starts with a polite greeting and introduces the reason for the request in a clear and concise manner. The writer provides a detailed explanation for their request, explaining the importance of the family event and the need to be present. Transition words and phrases are used effectively throughout the response to connect ideas and sentences, creating a smooth flow of information. The writer also suggests a solution to handle their tasks during their absence, showing consideration and professionalism. There are only a few minor errors in grammar and punctuation, but they do not significantly affect the overall coherence and cohesion of the response. Overall, the response demonstrates a good control of coherence and cohesion and effectively conveys the writer's request."
        },
        gra: {
            name: "Grammatical Range and Accuracy",
            band: 7,
            stub: false,
            comment: "This is example response.\n\nOverall, the grammatical range and accuracy in this response is fairly good. There are a few minor errors and areas that could be improved upon.In terms of accuracy, there are a few mistakes in the letter. 'Hope you are find well' should be 'Hope you are doing well' or 'Hope you are feeling well.' 'I apologies' should be 'I apologize' and 'require my attention' should be 'requires my attention.' Additionally, 'find' should be 'fine' and 'any' should be 'an.'In terms of range, the response demonstrates a good range of grammatical structures and vocabulary. The sentence structures are varied and the writer uses a mix of simple and complex sentences. There are also some appropriate phrases and expressions used, such as 'celebrate this special occasion' and 'recharge and return.' The response also flows well, with ideas and information presented logically.To improve, the writer could focus on avoiding small errors and reviewing sentence structures for clarity."
        },
        lr: {
            name: "Lexical Resource",
            band: 8,
            stub: false,
            comment: "This is example response.\n\nThe response demonstrates a good level of lexical resource with a variety of vocabulary and idiomatic expressions used appropriately. The writer utilizes a range of formal and informal expressions to convey their request and explain the reason for it. There is evidence of collocation, such as 'time off work', 'personal matter', 'apologize for any inconvenience', and 'renewed energy and focus'. The writer also demonstrates control over verb tenses, using the correct form throughout the response. The response is mostly error-free and demonstrates a good range of vocabulary, although there are a few minor errors, such as 'find well' instead of 'fine', and 'then' instead of 'than'. Overall, the response effectively conveys the writer's request and provides sufficient details, showcasing a good command of lexical resource."
        },
        ta: {
            name: "Task Achievement",
            band: 7,
            stub: false,
            comment: "This is example response.\n\nThe response addresses all the points of the task and provides relevant details. The writer explains the reason for taking time off and gives specific information about the duration needed. Additionally, the writer suggests a solution for covering their work while they are away. The letter is organized and coherent, with clear paragraphs and appropriate language used throughout. The writer could have provided more concise and precise details about the personal matter that requires their attention. Additionally, some grammatical errors and awkward phrasing could be improved. Overall, the response demonstrates a good level of task achievement, with relevant details provided and the main points addressed effectively."
        },

    }
}
}

export function getCardColor(score) {
    let res = ""
    if (score >= 0 && score <= 4) {
        res = "resultcard-low"

    } else if (score > 4 && score < 6) {
        res = "resultcard-medium"

    } else {
        res = "resultcard-high"
    }
    return res

}

export function getBlurColor(stub) {
    let res = ""
    if (stub==true) {
        res =  ""
    } else if (stub==false) {
        res =  "only-login-user"
    }
    return res
}

export function GetUserToken() {
    let profile = Cookies.get('userprofile')
    console.log(profile);
    if (typeof(profile) == "undefined") {
        console.log("no cookie found, wait for login")
        return "undefined"
    } else {
        return profile
    }
}

export function GetUserLevel() {
    let profile = Cookies.get('userlevel')
    console.log(profile);
    if (typeof(profile) == "undefined") {
        return 0
    } else {
        return profile
    }
}

export function GetEstimation(cookie_name) {
    let res = Cookies.get(cookie_name)
    if (typeof(res) == "undefined") {
        // return "undefined"
        if (cookie_name=="WritingEstimationResult") {
            return DefaultWriting
        } else {
            return DefaultSpeaking
        }
        
    } else {
        let tmp = JSON.parse(res)
        console.log(tmp)
        return tmp
    }
}



export function GetUserName() {
    let profile = Cookies.get('userprofile')
    console.log(profile);
    if (typeof(profile) == "undefined") {
        console.log("no cookie found, wait for login")
        return "undefined"
    } else {
        return profile
    }
}

export function GetStubText(userlevel) {
    if (userlevel == 0) {
        return "Please LogIn to see results"
    } else {
        return "Not avaliable in your plan"
    }
}

export function GetOverallScoreText(userlevel, overall) {
    console.log(userlevel)
    if (userlevel < 2) {
        return ""
    } else {
        return "Overall: "+ overall
    }
}

export function StringToMarkup(inp) {
    let tmp = inp.split("\n")
    console.log(tmp)
    return tmp.map(element => {
        return (<p className="sec-info__text-element">{element}<br/></p>)
    });
}

export function GetBandScoreText(userlevel, badnscore, stub) {
    console.log(userlevel)
    if (userlevel == 0) {
        return ""
    } else if (userlevel == 1 && stub == true) {
        return ""
    } else {
        return badnscore
    } 
}

export function scrollElement(inpname){
    if (inpname != null) {
    var element = document.getRootNode().getElementById(inpname);
    element.scrollIntoView();
    }
   }


export const logIn = (props) => {

    async function LoginBackend(inpprofile) {
        console.log(inpprofile)
        const response = await fetch("/login", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            profile: inpprofile
          })
        });
      }

      let localtoken = Cookies.get('usertoken')
      if (typeof(localtoken) == "undefined") {
        console.log("no cookie found, wait for login")
        useGoogleLogin({
            onSuccess: (codeResponse) => {
              Cookies.set('usertoken', codeResponse.access_token, { expires: 7 });          
            },
            onError: (error) => console.log('Login Failed:', error)
        });
      } else {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${localtoken}`, {
                    headers: {
                        Authorization: `Bearer ${localtoken}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                  Cookies.set('userprofile', res.data.id, { expires: 7 });
                    LoginBackend(res.data);

                    
                })
                .catch((err) => console.log(err));
        
    }

    
}


