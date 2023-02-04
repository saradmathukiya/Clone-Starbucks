let firstslides = document.querySelectorAll(".slide");
var count = 0;

firstslides.forEach((slide, index) => {
  slide.style.left = `${index * 34}%`;
});

let firstslides_leftbtn = document.querySelector(".left-btn");
let firstslides_Rightbtn = document.querySelector(".Right-btn");

// firstslides_leftbtn.addEventListener("click", goPrev());
// firstslides_Rightbtn.addEventListener("click", goNext());

const goPrev = () => {
  if (count > -2) {
    count--;
    slideImage();
    btn_opacity();
  }
};

let btn_opacity = () => {
  if (count == -2) {
    firstslides_Rightbtn.style.opacity = "0.5";
  } else {
    firstslides.Rightbtn.style.opacity = "1";
  }

  if (count == 0) {
    firstslides_leftbtn.style.opacity = "0.5";
  } else {
    firstslides_leftbtn.style.opacity = "1";
  }
};

const goNext = () => {
  if (count < 0) {
    count++;
    slideImage();
    btn_opacity();
  }
};

const slideImage = () => {
  firstslides.forEach((slide) => {
    slide.style.transform = `translateX(${count * 107}%)`;
  });
};

// slider2

let secondslides = document.querySelectorAll(".slide-2");
var count2 = 0;

secondslides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let secondslides_leftbtn = document.querySelector(".slider-2-btn-left");
let secondslides_Rightbtn = document.querySelector(".slider-2-btn-right");

const goNext2 = () => {
  if (count2 > -3) {
    count2--;
    slideImage2();
    btn_opacity2();
  }
};

const goPrev2 = () => {
  if (count2 < 0) {
    count2++;
    slideImage2();
    btn_opacity2();
  }
};

let btn_opacity2 = () => {
  if (count2 == -3) {
    secondslides_Rightbtn.style.opacity = "0.5";
  } else {
    secondslides_Rightbtn.style.opacity = "1";
  }

  if (count2 == 0) {
    secondslides_leftbtn.style.opacity = "0.5";
  } else {
    secondslides_leftbtn.style.opacity = "1";
  }
};

const slideImage2 = () => {
  secondslides.forEach((slide) => {
    slide.style.transform = `translateX(${count2 * 100}%)`;
  });
};

// slider-3

let thirdslides = document.querySelectorAll(".slide-3");
var count3 = 0;

// thirdslides.forEach(
//     (slide, index) => {
//         slide.style.left = `${index * 100}%`;
//     }
// )

let thirdslides_leftbtn = document.querySelector(".slider-3-btn-left");
let thirdslides_Rightbtn = document.querySelector(".slider-3-btn-right");

const goNext3 = () => {
  if (count3 > -1) {
    count3--;
    slideImage3();
    btn_opacity3();
  }
};

const goPrev3 = () => {
  if (count3 < 0) {
    count3++;
    slideImage3();
    btn_opacity3();
  }
};

let btn_opacity3 = () => {
  if (count3 == -1) {
    thirdslides_Rightbtn.style.opacity = "0.5";
  } else {
    thirdslides_Rightbtn.style.opacity = "1";
  }

  if (count3 == 0) {
    thirdslides_leftbtn.style.opacity = "0.5";
  } else {
    thirdslides_leftbtn.style.opacity = "1";
  }
};

const slideImage3 = () => {
  thirdslides.forEach((slide) => {
    slide.style.transform = `translateX(${count3 * 110}%)`;
  });
};
