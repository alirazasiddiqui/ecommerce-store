const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboard`

const getBillboard=async (id)=>{
    const res=await fetch(`${URL}/${id}`);
    return res.json();
}

export default getBillboard;