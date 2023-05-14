

const BASE_URL = "http://myblogsblogging.netlify.app/blogs";
    
export async function index(){
    try{
        const response = await fetch(BASE_URL, {method: "GET"})
        if (response.ok){
            return response.json()
        }else{
            throw new Error("Invalid Request")
        }
    }catch(err){
        console.log(err)
        return err
    }
}

export async function create(form){
    
    try{
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
        })

        if (response.ok) {
            return response
        }
        else{
            throw new Error(response.statusText)
        }

    }catch(err){
        console.log(err)
    }
}

export async function detail(id){
    try{
        const url = `${BASE_URL}/${id}`
        const response = await fetch(url, {method: "GET"})
        console.log(response)
        if (response.ok){
            return response.json()
        }else{
            throw new Error("Invalid Request")
        }
    }catch(err){
        console.log(err)
        return err
    }
}

export async function destroy(id){
    try{
        const url = `${BASE_URL}/${id}`
        const response = await fetch(url, {method: "DELETE"})
        console.log(response)
        if (response.ok){
            return response.json()
        }else{
            throw new Error("Invalid Request")
        }

    }catch(err){
        console.log(err)
        return err
    }
}

export async function update(id, form){
    
    try{
        const url = `${BASE_URL}/${id}`
        const response = await fetch(url, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify(form)
        })

        if (response.ok) {
            console.log(response)
            return await response.json()
        }
        else{
            throw new Error(response.statusText)
        }

    }catch(err){
        console.log(err)
    }
}