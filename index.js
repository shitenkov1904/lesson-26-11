const fs = require("fs/promises");
const path = require("path");
const _ = require('lodash');
let good = []
let bad = []
let avg = []
const currentDate = new Date();
const formattedDate = `${currentDate.getFullYear()}год ${currentDate.getMonth() + 1}месяц ${currentDate.getDate()}день`;
async function readFile(filePath) {
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (readError) {
    if (readError.code === "ENOENT") {
      console.log("Файл не существует");
    } else {
      throw readError;
    }
  }
}
readFile("students.json").then(async (a) => {
        JSON.parse(a).forEach((el) => {
            const lesson = [
            { lesson: el.grades.math },
            { lesson: el.grades.physics },
            { lesson: el.grades.literature  },
            ];
            const acc = Math.floor(_.meanBy(lesson, (p) => p.lesson))         
            avg.push(`${el.name}: ${acc}`)
            if (acc >= 4) {
                good.push(`${el.name}: ${acc}`);
                console.log(`${el.name}: ${acc}`)
            } else if (acc <= 3) {
                bad.push(`${el.name}: ${acc}`);
                console.log(`${el.name}: ${acc}`)
            }
        });
    await fs.writeFile('info.txt', `
        Отчёт по успеваемости студентов
--------------------------------
Общее количество студентов: ${avg.length}

Средние баллы:
${avg.join(`
    `)}

Отличники (средний балл > 4): ${good}
Отстающие (средний балл < 3.0): ${bad}

Дата генерации: ${formattedDate}`)
});
