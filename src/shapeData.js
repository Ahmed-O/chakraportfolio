const confetti = {
  light: {
    primary: '90CDF4', // blue.400
    secondary: 'BEE3F8', // blue.100
  },

  dark: {
    primary: '1A365D', // blue.900
    secondary: '2A4365', // blue.800
  },
};

export const ANIMATED_SHAPES_LIGHT = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1490' height='745' preserveAspectRatio='none' viewBox='0 0 1490 745'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1022%26quot%3b)' fill='none'%3e%3cpath d='M847.2307174803094 376.5619984624775L757.271185395754 500.38067199770603 881.0898589309825 590.3402040822615 971.0493910155379 466.5215305470329z' fill='%23${confetti.light.primary}' class='triangle-float2'%3e%3c/path%3e%3cpath d='M788.3092507710862 580.020038898935L642.6842206859235 457.8261298642946 520.490311651283 603.4511599494574 666.1153417364458 725.6450689840979z' fill='%23${confetti.light.secondary}' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1025.2935962972558 810.7114731651467L1045.1895088226674 621.4145102490467 855.8925459065675 601.5185977236349 835.9966333811558 790.8155606397349z' fill='%23${confetti.light.secondary}' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1491.2942229450844-19.60744944380017L1387.2513346380529-84.62066163098942 1341.7529605107848 103.95027692315236z' fill='%23${confetti.light.primary}' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1300.466306103957 463.00872226783116L1484.986617250752 388.4576773652627 1410.4355723481835 203.9373662184678 1225.9152612013886 278.4884111210362z' fill='%23${confetti.light.primary}' class='triangle-float1'%3e%3c/path%3e%3cpath d='M178.494%2c492.368C247.109%2c497.102%2c318.165%2c463.154%2c348.056%2c401.211C375.423%2c344.498%2c339.483%2c282.964%2c304.956%2c230.303C274.809%2c184.322%2c233.455%2c144.146%2c178.494%2c142.595C121.041%2c140.973%2c67.154%2c172.671%2c39.032%2c222.797C11.477%2c271.913%2c19.253%2c330.292%2c45.131%2c380.312C73.726%2c435.585%2c116.41%2c488.085%2c178.494%2c492.368' fill='%23${confetti.light.secondary}' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1022'%3e%3crect width='1490' height='745' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(60%2c 0)%7d 50%25%7btransform: translate(-50px%2c 0)%7d 100%25%7btransform: translate(20%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0px%2c 0px)%7d 100%25%7btransform: translate(20%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -50px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 10s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`;

export const ANIMATED_SHAPES_DARK = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1490' height='745' preserveAspectRatio='none' viewBox='0 0 1490 745'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1022%26quot%3b)' fill='none'%3e%3cpath d='M847.2307174803094 376.5619984624775L757.271185395754 500.38067199770603 881.0898589309825 590.3402040822615 971.0493910155379 466.5215305470329z' fill='%23${confetti.dark.primary}' class='triangle-float2'%3e%3c/path%3e%3cpath d='M788.3092507710862 580.020038898935L642.6842206859235 457.8261298642946 520.490311651283 603.45dark494574 666.1153417364458 725.6450689840979z' fill='%23${confetti.dark.secondary}' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1025.2935962972558 810.7114731651467L1045.1895088226674 621.4145102490467 855.8925459065675 601.5185977236349 835.9966333811558 790.8155606397349z' fill='%23${confetti.dark.secondary}' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1491.2942229450844-19.60744944380017L1387.2513346380529-84.62066163098942 1341.7529605107848 103.95027692315236z' fill='%23${confetti.light.primary}' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1300.466306103957 463.00872226783116L1484.986617250752 388.4576773652627 1410.4355723481835 203.9373662184678 1225.9152612013886 278.4884111210362z' fill='%23${confetti.dark.primary}' class='triangle-float1'%3e%3c/path%3e%3cpath d='M178.494%2c492.368C247.109%2c497.102%2c318.165%2c463.154%2c348.056%2c401.211C375.423%2c344.498%2c339.483%2c282.964%2c304.956%2c230.303C274.809%2c184.322%2c233.455%2c144.146%2c178.494%2c142.595C121.041%2c140.973%2c67.154%2c172.671%2c39.032%2c222.797C11.477%2c271.913%2c19.253%2c330.292%2c45.131%2c380.312C73.726%2c435.585%2c116.41%2c488.085%2c178.494%2c492.368' fill='%23${confetti.dark.secondary}' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1022'%3e%3crect width='1490' height='745' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-15px%2c -15px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 7s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`;
