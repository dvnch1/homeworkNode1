const fsPromises =require('node:fs/promises')
const path = require("path");

const foo = async () => {


await fsPromises.mkdir(path.join(__dirname, 'baseFolder','first-folder'), {recursive: true})
    await fsPromises.mkdir(path.join(__dirname, 'baseFolder','second-folder'), {recursive: true})
    await fsPromises.mkdir(path.join(__dirname, 'baseFolder','third-folder'), {recursive: true})
    await fsPromises.mkdir(path.join(__dirname, 'baseFolder','forth-folder'), {recursive: true})
    await fsPromises.mkdir(path.join(__dirname, 'baseFolder','fifth-folder'), {recursive: true})

    const pathToFile1 = path.join(__dirname, 'baseFolder', 'first-folder','one.txt');
    await fsPromises.writeFile(pathToFile1, 'Hello World-1!')
    const stat1 = await fsPromises.stat(pathToFile1)
    console.log(stat1.isFile())
    console.log(pathToFile1)
    const pathToFile11 = path.join(__dirname, 'baseFolder', 'first-folder','two.txt');
    await fsPromises.writeFile(pathToFile11, 'Hello World-1-2!')
    const stat11 = await fsPromises.stat(pathToFile11)
    console.log(stat11.isFile())
    console.log(pathToFile11)
    const pathToFile12 = path.join(__dirname, 'baseFolder', 'first-folder','three.txt');
    await fsPromises.writeFile(pathToFile12, 'Hello World-1-3!')
    const stat12 = await fsPromises.stat(pathToFile12)
    console.log(stat12.isFile())
    console.log(pathToFile12)
    const pathToFile13 = path.join(__dirname, 'baseFolder', 'first-folder','four.txt');
    await fsPromises.writeFile(pathToFile13, 'Hello World-1-4!')
    const stat13 = await fsPromises.stat(pathToFile13)
    console.log(stat13.isFile())
    console.log(pathToFile13)
    const pathToFile14 = path.join(__dirname, 'baseFolder', 'first-folder','five.txt');
    await fsPromises.writeFile(pathToFile14, 'Hello World-1-5!')
    const stat14 = await fsPromises.stat(pathToFile14)
    console.log(stat14.isFile())
    console.log(pathToFile14)

    const pathToFile2 = path.join(__dirname, 'baseFolder', 'second-folder','one.txt');
    await fsPromises.writeFile(pathToFile2, 'Hello World-2-1!')
    const stat2 = await fsPromises.stat(pathToFile2)
    console.log(stat2.isFile())
    console.log(pathToFile2)
    const pathToFile21 = path.join(__dirname, 'baseFolder', 'second-folder','two.txt');
    await fsPromises.writeFile(pathToFile21, 'Hello World-2-2!')
    const stat21 = await fsPromises.stat(pathToFile21)
    console.log(stat21.isFile())
    console.log(pathToFile21)
    const pathToFile22 = path.join(__dirname, 'baseFolder', 'second-folder','three.txt');
    await fsPromises.writeFile(pathToFile22, 'Hello World-2-3!')
    const stat22 = await fsPromises.stat(pathToFile22)
    console.log(stat22.isFile())
    console.log(pathToFile22)
    const pathToFile23 = path.join(__dirname, 'baseFolder', 'second-folder','four.txt');
    await fsPromises.writeFile(pathToFile23, 'Hello World-2-4!')
    const stat23 = await fsPromises.stat(pathToFile23)
    console.log(stat23.isFile())
    console.log(pathToFile23)
    const pathToFile24 = path.join(__dirname, 'baseFolder', 'second-folder','five.txt');
    await fsPromises.writeFile(pathToFile24, 'Hello World-2-5!')
    const stat24 = await fsPromises.stat(pathToFile24)
    console.log(stat24.isFile())
    console.log(pathToFile24)

    const pathToFile3 = path.join(__dirname, 'baseFolder', 'third-folder','one.txt');
    await fsPromises.writeFile(pathToFile3, 'Hello World-3-1!')
    const stat3 = await fsPromises.stat(pathToFile3)
    console.log(stat3.isFile())
    console.log(pathToFile3)
    const pathToFile31 = path.join(__dirname, 'baseFolder', 'third-folder','two.txt');
    await fsPromises.writeFile(pathToFile31, 'Hello World-3-2!')
    const stat31 = await fsPromises.stat(pathToFile31)
    console.log(stat31.isFile())
    console.log(pathToFile31)
    const pathToFile32 = path.join(__dirname, 'baseFolder', 'third-folder','three.txt');
    await fsPromises.writeFile(pathToFile32, 'Hello World-3-3!')
    const stat32 = await fsPromises.stat(pathToFile32)
    console.log(stat32.isFile())
    console.log(pathToFile32)
    const pathToFile33 = path.join(__dirname, 'baseFolder', 'third-folder','four.txt');
    await fsPromises.writeFile(pathToFile33, 'Hello World-3-4!')
    const stat33 = await fsPromises.stat(pathToFile33)
    console.log(stat33.isFile())
    console.log(pathToFile33)
    const pathToFile34 = path.join(__dirname, 'baseFolder', 'third-folder','five.txt');
    await fsPromises.writeFile(pathToFile34, 'Hello World-3-5!')
    const stat34 = await fsPromises.stat(pathToFile34)
    console.log(stat34.isFile())
    console.log(pathToFile34)


    const pathToFile4 = path.join(__dirname, 'baseFolder', 'forth-folder','one.txt');
    await fsPromises.writeFile(pathToFile4, 'Hello World-4-1!')
    const stat4 = await fsPromises.stat(pathToFile4)
    console.log(stat4.isFile())
    console.log(pathToFile4)
    const pathToFile41 = path.join(__dirname, 'baseFolder', 'forth-folder','two.txt');
    await fsPromises.writeFile(pathToFile41, 'Hello World-4-2!')
    const stat41 = await fsPromises.stat(pathToFile41)
    console.log(stat41.isFile())
    console.log(pathToFile41)
    const pathToFile42 = path.join(__dirname, 'baseFolder', 'forth-folder','three.txt');
    await fsPromises.writeFile(pathToFile42, 'Hello World-4-3!')
    const stat42 = await fsPromises.stat(pathToFile42)
    console.log(stat42.isFile())
    console.log(pathToFile42)
    const pathToFile43 = path.join(__dirname, 'baseFolder', 'forth-folder','four.txt');
    await fsPromises.writeFile(pathToFile43, 'Hello World-4-4!')
    const stat43 = await fsPromises.stat(pathToFile43)
    console.log(stat43.isFile())
    console.log(pathToFile43)
    const pathToFile44 = path.join(__dirname, 'baseFolder', 'forth-folder','five.txt');
    await fsPromises.writeFile(pathToFile44, 'Hello World-4-5!')
    const stat44 = await fsPromises.stat(pathToFile44)
    console.log(stat44.isFile())
    console.log(pathToFile44)

    const pathToFile5 = path.join(__dirname, 'baseFolder', 'fifth-folder','one.txt');
    await fsPromises.writeFile(pathToFile5, 'Hello World-5-1!')
    const stat5 = await fsPromises.stat(pathToFile5)
    console.log(stat5.isFile())
    console.log(pathToFile5)
    const pathToFile51 = path.join(__dirname, 'baseFolder', 'fifth-folder','two.txt');
    await fsPromises.writeFile(pathToFile51, 'Hello World-5-2!')
    const stat51 = await fsPromises.stat(pathToFile51)
    console.log(stat51.isFile())
    console.log(pathToFile51)
    const pathToFile52 = path.join(__dirname, 'baseFolder', 'fifth-folder','three.txt');
    await fsPromises.writeFile(pathToFile52, 'Hello World-5-3!')
    const stat52 = await fsPromises.stat(pathToFile52)
    console.log(stat52.isFile())
    console.log(pathToFile52)
    const pathToFile53 = path.join(__dirname, 'baseFolder', 'fifth-folder','four.txt');
    await fsPromises.writeFile(pathToFile53, 'Hello World-5-4!')
    const stat53 = await fsPromises.stat(pathToFile53)
    console.log(stat53.isFile())
    console.log(pathToFile53)
    const pathToFile54 = path.join(__dirname, 'baseFolder', 'fifth-folder','five.txt');
    await fsPromises.writeFile(pathToFile54, 'Hello World-5-5!')
    const stat54 = await fsPromises.stat(pathToFile54)
    console.log(stat54.isFile())
    console.log(pathToFile54)

}


void foo();