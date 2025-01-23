function squareMatrix(a,b,c)
{
    let firstdia
    let seconddia
    let diff=0
    if(a.length===3 && b.length===3 && c.length===3)
     {
        for(let i=0;i<a.length;i++)
            for(let j=0;j<b.length;j++)
                for(let k=0;k<c.length;k++)
            
        firstdia=a[0]+b[1]+c[2]
       seconddia=a[2]+b[1]+c[0]
    }
    
//    return [firstdia,seconddia]
   diff=firstdia-seconddia
   let absolutevalue=Math.abs(diff)
   return absolutevalue

}

let array1=[1,2,3]
let array2=[4,5,6]
let array3=[9,8,9]
console.log(squareMatrix(array1,array2,array3))