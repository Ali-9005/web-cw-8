// ------------------------------ 1️⃣ السؤال الأول ------------------------------
//     - driving اسمها function عرف دالة او
//     - تأخذ عمر شخص (رقم) واذا كان اكبر من 18 تطبع
//          🚘😍 مبروك سوف تحصل على الليسن
//     - واذا كان اقل من 18 يطبع
//          😢 للاسف عمرك لا يسمح
//     console.log ، if ملاحظة: سوف تستخدم

// 👇 هنا function عرف الدالة او

function driving(age){

    if(age >= 18){
        console.log(`🚘😍 مبروك سوف تحصل على الليسن`);
    } else {
        console.log(`😢 للاسف عمرك لا يسمح`);
    }
}

driving(11);



// لا تنسى أن تنادي الدالة



// ------------------------------ 2️⃣ السؤال الثاني ------------------------------
// 2️⃣ السؤال الثاني
//     - iceCream واجعل اسمها array عرف مصفوفة او
//     - 🍦 احفظ فيها مجموعة من نكهات الآيس كريم
//     - console.log لطباعة قائمة نكهات الآيس كريم بإستخدام for loop استخدم

// 👇 هنا array عرف المصفوفة او

let iceCream = ["manago", "strawberry", "vanilla"];


    for (let test of iceCream) {
        console.log(test);
        
    }





// --------------------------------- ✨ بونص ------------------------------------
// بحيث عند مناداة الدالة تطبع القائمة myIceCream بإسم function عرف دالة او
// for loop عرف مصفوفة أخرى تحتوي على أفلامك الكرتون المفضلة بالنسبة لك وقم بطباعة الأفلام بإستخدام

let iceCream1 = ["mango", "strawberry", "vanilla"];

function myIceCream(iceCream1){
    
    for (let flavour of iceCream1 ) {
        
        console.log(`My Fav IceCream Flavours are ${iceCream1}`);
        console.log(flavour);
        
    }

}

myIceCream(iceCream1);

let movies = ["harry potter", "home alone", "the 100", "the walking dead"];

for (let test1 of movies) {
    console.log(test1);
}

// --------------------------------- 🔥 بونص ------------------------------------
// while loop اطبع احد المصفوفات بإستخدام

 let i1 = 0;
 while (i1 < movies.length) {
     console.log(movies[i1]);
     i1++

 }
