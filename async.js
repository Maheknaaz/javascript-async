// Run two async tasks in parallel using Promise.all() with async/await

function t1() {
    return new Promise(res => setTimeout(() => res("T1 done"), 1000));
}

function t2() {
    return new Promise(res => setTimeout(() => res("T2 done"), 1000));
}

async function runParallel(){
    let results = await Promise.all([t1(), t2()]);
    console.log(results)
}

runParallel();