let form2 = `M459.235 -258.125C250.45 -208.171 141.074 -39.8325 66.9342 135.041C-128.284 413.71 166.283 510.63 177.782 692.163C186.654 832.21 456.024 936.293 849.012 729.855C962.014 670.495 1149.49 426.452 1124.75 256.08C1078.56 -62.1023 805.544 -340.982 459.235 -258.125Z`
let form3 = `M895.476 -233.83C555.92 -406.288 457.794 -91.21 263.928 -28.1602C-263.908 169.523 171.566 504.622 137.424 701.649C91.5167 966.569 267.565 1434.91 740.534 1314.72C1314.22 1168.94 1071.17 1282.36 1218.89 997.804C1626.2 213.228 1244.49 -56.5681 895.476 -233.83Z`
let form4 = `M1523.18 9.03018C1313.87 -282.764 1098.33 -59.1816 910.197 -89.4979C386.919 -150.087 286.002 225.078 173.871 376.616C23.1008 580.372 -127.141 703.872 173.871 1051.15C499.05 1426.32 446.722 1267.16 1269.02 1187.58C2091.31 1108 1738.32 308.952 1523.18 9.03018Z`
let form5 = `M1781 311.693C1841.8 4.49338 1454.33 -136.307 1253 -168.307C693 -232.26 409 -76.2603 289 83.6934C127.649 298.766 -167 83.6934 -167 571.693C-167 991.693 77 1275.69 957 1191.69C1837 1107.69 1705 695.693 1781 311.693Z`
let menuLinks = document.querySelectorAll(".nav-item h2")
let piks = document.querySelectorAll(".pik")

let tl = gsap.timeline({
    defaults: {
        ease: "none"
    }
})

//gsap.set([".form", ".top", ".bottom"], {transformOrigin: "50% 50%"})
gsap.set(".pik", {xPercent:-50})

let cross = gsap.timeline({defaults: {duration: 1, paused:true}})
cross.to(".top", {rotate: "45deg", y: 12})
    .to(".bottom", {rotate: "-45deg", y: -12}, "<")


tl.to(".form", {attr: {d: form2}, xPercent: -60, duration: 0.2})
    .to(".form", {attr: {d: form3}, xPercent: -65, duration: 0.1})
    .to(".form", {attr: {d: form4}, xPercent: -68, duration: 0.2})
    .to(".form", {attr: {d: form5}, duration: 0.2})
    .from(".kactus-overlay", {yPercent:100})
    .from(menuLinks, {yPercent: 100, stagger: 0.3})
    .from(".leaf-cactus", {xPercent: 50, ease: "back.out"})
