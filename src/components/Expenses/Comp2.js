function Comp2(data) {
    console.log("Comp2", data);
    return (
        <p>{data.children}. I have value of {data.value}</p>
    );
}

export default Comp2;