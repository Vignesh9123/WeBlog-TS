
export async function awaitDelay(){
    return new Promise((res)=>{
        setTimeout(() => {
            res("")
        }, 3000);
    })
}