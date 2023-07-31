
const w = document.querySelector("#weight");
const height = document.querySelector("#height");
const result = document.getElementById("result");
const userName = document.getElementById("name");

const submit = document.querySelector("#submit");

submit.addEventListener("click",function(e){
    e.preventDefault();

    
    result.style.display= 'block';

    const num1 = Number(w.value);
    const num2 = Number(height.value);
    const myName = userName.value;

    const h = num2 * 0.0254;

    const ResultHeight = (h*h);

    const BMI = num1 / ResultHeight;
    console.log(BMI)

    if (BMI < 18.5) {

        result.textContent = `আসসালামুয়ালাইকুম ${myName}, আপনার স্বাস্থ্য খুবেই খারাপ, বাপে কি কম খাওয়ায় নাকি বাপে ফকিন্নি ? স্বাস্থ্য থিক করেন নাহলে বিয়ে হবে না`
        result.style.color = "red";

        } else if (18.5 <= BMI && BMI < 24.99){
            
                result.innerHTML = `আসসালামুয়ালাইকুম ${myName}, আপনার স্বাস্থ্য স্বাভাবিক আছে, এভাবেই থাকার চেষ্টা করবেন`
                result.style.color = "green"
            
        } else if (25.0 <= BMI && BMI < 29.9){

                result.innerHTML = `আসসালামুয়ালাইকুম ${myName}, আপনার স্বাস্থ্য স্বাভাবিক এর থেকে একটু বেশি আছে, একটু স্বাস্থ্য কমালে ভাল হয় `
                result.style.color = "gold"

        } else if (30.0 <= BMI){
                result.innerHTML = `আসসালামুয়ালাইকুম ${myName}, বাপের সম্পত্তি মনে হয় বেশি হয়েছে, নিজের ভুরির দিকে খেয়াল করুন আর চিকিৎসক এর পরামর্শ নিয়ে স্বাস্থ্য ঠিক করুন `
                result.style.color = "red"
        } else{
            result.innerHTML = "something wrong"
        }

});

