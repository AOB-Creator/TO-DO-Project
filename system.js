// document.querySelector(".exit-modal").addEventListener("click", ()=>{
//     document.querySelector(".modal-back").classList.add("none")
// })



class ToDoList{
    constructor(data=[]){
        this.array = data;
    };
    other(){
        const addition = document.querySelector(".addition")
        addition.addEventListener("click", ()=>{
            const inputdata = document.querySelector(".inputdata")
            inputdata.classList.toggle("nonesd")
        })

        

        const lengtharry = this.array.length;
        const counter = document.querySelector(".counter")
            counter.textContent = lengtharry;        


            const times =  new Date()
            const today = document.querySelector(".Dayslight h4")
            const texttime = document.querySelector(".Dayslight span")
        
        
            
        setInterval(()=>{
            switch(times.getMonth()+1){
                case 1: texttime.textContent=`${times.getDate()}th January`; break;
                case 2: texttime.textContent=`${times.getDate()}th Febuary`; break;
                case 3: texttime.textContent=`${times.getDate()}th March`; break;
                case 4: texttime.textContent=`${times.getDate()}th April`; break;
                case 5: texttime.textContent=`${times.getDate()}th May`; break;
                case 6: texttime.textContent=`${times.getDate()}th June`; break;
                case 7: texttime.textContent=`${times.getDate()}th Jule`; break;
                case 8: texttime.textContent=`${times.getDate()}th August`; break;
                case 9: texttime.textContent=`${times.getDate()}th September`; break;
                case 10: texttime.textContent=`${times.getDate()}th October`; break;
                case 11: texttime.textContent=`${times.getDate()}th November`; break;
                case 12: texttime.textContent=`${times.getDate()}th December`; break;


            }


            switch(times.getDay()){
                case 1: today.textContent = "Monday"; break;
                case 2: today.textContent = "Tuesday"; break;
                case 3: today.textContent = "Wednesday"; break;
                case 4: today.textContent = "Thursday"; break;
                case 5: today.textContent = "Friday"; break;
                case 6: today.textContent = "Saturday"; break;
                case 7: today.textContent = "Sunday"; break;
            }

        }, 1000)
        

        

    }
    

    remover(){
        const mainpage = document.querySelector(".middleside1");
        const box = document.querySelectorAll(".box-table")
        box.forEach(item=>{
            item.remove()
        })
        console.log(box)
        
    }

    boxmaker(){
        
        const lengtha = this.array.length
        this.array.forEach(function(item, index){
            
            const mainpage = document.querySelector(".middleside1");
            if(lengtha>7){
                mainpage.classList.add("scroller")
            }
            else{
                mainpage.classList.remove("scroller")
            }
            const box = document.createElement("div")
            box.className="box-table"
    
            const check_box = document.createElement("div")
            check_box.className="checkbox"
    
            const checkbox = document.createElement("input")
            checkbox.setAttribute("type", "checkbox");
            check_box.appendChild(checkbox)
    
            const exercise = document.createElement("div")
            exercise.className="exercise"
            exercise.textContent=item[0]
    
            const time = document.createElement("div")
            time.className="time"
            time.textContent=item[1]

            const garbage = document.createElement("div")
            garbage.classList="garbage"
            const garicons = document.createElement("i")
            garicons.classList="far fa-trash-alt"
            garbage.appendChild(garicons)
    
            box.append(check_box, exercise, time, garbage);
            mainpage.appendChild(box)


            checkbox.addEventListener("click", ()=>{
                exercise.classList.toggle("updrawn")
            })
                

            garbage.addEventListener("click", (e)=>{
                const data = JSON.parse(localStorage.getItem("datas"))
                const terms = data.filter((item, inde)=>{
                    
                       if(inde !==index ) {
                        return item
                       }
                       
                })
                console.log("ok")
                localStorage.setItem("datas", JSON.stringify(terms))
                const productdata = JSON.parse(localStorage.getItem("datas"))
                const clonetodo = new ToDoList(productdata);
                clonetodo.remover()        
                clonetodo.boxmaker();              
                clonetodo.other();    
            })
        
        })
    }
}

let dataexercise = ""
let timeexercise = ""


if(localStorage.getItem("datas")==null){
    datas=[]
}else{
    datas = JSON.parse(localStorage.getItem("datas"))
}



const inputtext = document.querySelector("input#exercise")
inputtext.addEventListener("change", (e)=>{
    dataexercise=e.target.value
})

const inputtime = document.querySelector("input[type=time]")
inputtime.addEventListener("change", (e)=>{
    
    timeexercise = e.target.value

})

const addbtn = document.querySelector(".addbtn")



addbtn.addEventListener("click", function(e){
    e.preventDefault() 
        if(dataexercise!=="" && timeexercise!==""){
            
        if(localStorage.getItem("datas")==null){
            datas=[]
            datas.push([dataexercise, timeexercise]) 
            localStorage.setItem("datas", JSON.stringify(datas))       
        }else{
            const newdata = JSON.parse(localStorage.getItem("datas"))
        
            console.log("new data ->", newdata )
       newdata.push([dataexercise, timeexercise]) 
       localStorage.setItem("datas", JSON.stringify(newdata))       
    }
       
       
       const productdata = JSON.parse(localStorage.getItem("datas"))
       const clonetodo = new ToDoList(productdata);
       clonetodo.remover()        
       clonetodo.boxmaker();              
       clonetodo.other();       
       inputtext.value=""
       inputtime.value=""
    }
    else{
        
        alert("Fill all the Forms")
    }

})



const clonetodo = new ToDoList(datas);
clonetodo.boxmaker();              
clonetodo.other();                     



