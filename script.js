const users= document.querySelector('.user-list');
const userName= document.querySelector('#user');
let userArr=[];
const getUser=async ()=>{
    try{
        const res=await fetch('https://api.github.com/users')
        const data =await res.json();
        // console.log(data);
        if(data){
            users.innerHTML="";
        }
        data.map((user)=>{
            const li=document.createElement('li')
            userArr.push(li);
            li.insertAdjacentHTML('afterbegin',
                `
                <div class="user-data">
                        <img src=${user.avatar_url} alt=${user.avatar_url} srcset="">
                        <div>
                            <p>${user.login}</p>
                            <a href=${user.html_url} target="_b
                            ">${user.html_url}</a>
                        </div>
                    </div>
                `
            )
            users.appendChild(li)
        })
    }catch(err){
        console.log(err)
    }
}

userName.addEventListener('input',(e)=>{
    const val=e.target.value;
    userArr.filter((userdisp)=>{
        userdisp.innerText.toLowerCase().includes(val.toLowerCase()) ? userdisp.classList.remove('hide') : userdisp.classList.add('hide');
    })
})
getUser();