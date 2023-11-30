
import { myAxios } from "./Helper";
import { privateAxios } from "./Helper";


export const apply = (jobId, formData) => {
  return privateAxios
    .post(`/home/job/apply/${jobId}`, formData,{
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }) 
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
  };



export const page = (user) => {
  return myAxios
    .post('/signup', user)
    .then((response) => response.data)
    .catch((error) => {
      // Handle error if needed
      console.log(error);
    });
}
export const login=(user)=>{
  return myAxios.post("/login", user).then((resp)=> resp.data).catch((error)=>{
    console.log(error)
  })
}
export const responsefeedback=(user)=>{
  return myAxios
  .put("/feedback/response", user)
  .then((resp)=> resp.data)
  .catch((error)=>{
    console.log(error)
  })
}


export const Interview=(user)=>{
  return privateAxios
 .post('/user/add/summary',user)
 .then((response)=>response.data) 
 .catch((error)=>{
  console.log(error)
 })

}
export const summary=(user)=>{
  return privateAxios
 .post('/user/view/summary',user)
 .then((response)=>response.data) 
 .catch((error)=>{
  console.log(error)
 })

}
 export const addnote=(user)=>{
  return privateAxios
  .post('/user/add/question',user)
  .then((response)=>response.data) 
 .catch((error)=>{
  console.log(error)
 })
 }

 export const addround=(user)=>{
  return privateAxios
  .post('/user/add/round',user)
  .then((response)=>response.data) 
 .catch((error)=>{
  console.log(error)
 })
 } 
 export const addskill=(user)=>{
  return privateAxios
  .post('/user/add/skill',user)
  .then((response)=>response.data) 
 .catch((error)=>{
  console.log(error)
 })
 } 

 export const viewquestion=(user)=>{
  return privateAxios
  .post('/user/view/question',user)
  .then((response)=>response.data) 
 .catch((error)=>{
  console.log(error)
 })
 } 

 export const viewround=(user)=>{
  return privateAxios
  .post('/user/view/round',user)
  .then((response)=>response.data) 
 .catch((error)=>{
  console.log(error)
 })
 } 

 export const viewskill=(user)=>{
  return privateAxios
  .post('/user/view/UserSkill',user)
  .then((response)=>response.data) 
 .catch((error)=>{
  console.log(error)
 })
 } 

 export const Adduser=(user)=>{
  return privateAxios
 .post('/company/add/user',user)
 .then((response)=>response.data) 
 .catch((error)=>{
  console.log(error)
 })

}

export const loadAllJobs=(pageNumber,pageSize)=>{
  return privateAxios
  .get(`/home/job?pageNumber=${pageNumber}&pageSize=${pageSize}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}
 export const singlepost=(jobId)=>{
  return privateAxios
  .post('/home/job/'+jobId)
  .then((response)=>response.data);
}  


export const bar = (address) => {
  
  const url = "findjob/{JobTitle}/{Address} "
  return privateAxios
    .get(url,address)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}; 
export const findjob=(user)=>{
  return privateAxios
  .post("/home/findjob/java/{Address}?address=lahore",user).then((resp)=>
  resp.data
  ).catch((error)=>{
    console.error(error)
  });
}

export const Admin=(user)=>{
  return privateAxios
  .post("/admin/add/company",user)
  .then((resp)=>
    resp.data
  ).catch((error)=>{
    console.error(error)
  });
}
export const administration=(user)=>{
  return privateAxios
  .post('/admin/add/administration', user).then((resp)=>
    resp.data
    )
    .catch((error)=>{
      console.log(error)
    
  });
}
export const View=(user)=>{
  return privateAxios
  .get('/admin/view/company', user).then((resp)=>
  resp.data
  ).catch((error)=>{
    console.log(error)
  });
}
export const postjob=(user)=>{

  return privateAxios
  .post('/company/postjob', user).then((resp)=>
  resp.data
  ).catch((error)=>{
    console.log(error)
  });
}
export const ViewJob=(user)=>{
 return privateAxios
 .post("/company/view/postjob", user).then((resp)=>
 resp.data
).catch((error)=>{
  console.log(error) 
} 
)};
    

export const findCandidate=(user)=>{
  return privateAxios
  .post("/company/search/user", user).then((resp)=>
  resp.data
 ).catch((error)=>{
   console.log(error) 
 } 
 )};

 export const inviteuser=(user)=>{
  return privateAxios
  .post("/company/send/invite", user).then((resp)=>
  resp.data
 ).catch((error)=>{
   console.log(error) 
 } 
 )};

 export const myinvite=(user)=>{
  return privateAxios
  .post("/user/view/invite", user).then((resp)=>
  resp.data
 ).catch((error)=>{
   console.log(error) 
 } 
 )};
 export const viewUser=(user)=>{
  return privateAxios
  .post("/company/view/user", user).then((resp)=>
  resp.data
 ).catch((error)=>{
   console.log(error) 
 } 
 )};

export const feedback= (user)=>{
  return privateAxios
  .post('/user/send/feedback', user).then((resp)=>
 resp.data ).catch((error)=>{
  console.log(error)
 })
}
export const inviteresp= (user)=>{
  return privateAxios
  .put('/user/invite/response', user).then((resp)=>
 resp.data ).catch((error)=>{
  console.log(error)
 })
}

export const viewfeedback=(user)=>{
  return privateAxios
  .post("/user/view/feedback", user).then((resp)=>
  resp.data
 ).catch((error)=>{
   console.log(error) 
 } 
 )};

