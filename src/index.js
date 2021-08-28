module.exports = function toReadable(number) {
    const _toReadable = (num) => {
        switch (num) {
            case 0:
                return "";
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            case 10:
                return "ten";
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 14:
                return "fourteen";
            case 15:
                return "fifteen";
            case 16:
                return "sixteen";
            case 17:
                return "seventeen";
            case 18:
                return "eighteen";
            case 19:
                return "nineteen";
            case 20:
                return "twenty";
            case 30:
                return "thirty";
            case 40:
                return "forty";
            case 50:
                return "fifty";
            case 60:
                return "sixty";
            case 70:
                return "seventy";
            case 80:
                return "eighty";
            case 90:
                return "ninety";
            case 100:
                return "hundred";
        }
    };

    const rank = (num) => {
        const hundred = Math.trunc(num / 100);
        let tens = 0;
        let appendix = 0;
        if (num % 100 > 19) {
            tens = Math.trunc((num % 100) / 10) * 10;
        } else if (num % 100 > 9) {
            appendix = 10;
        }
        const last = Math.trunc((num % 100) % 10) + appendix;
        return [hundred, tens, last];
    };

    const conclusion = (num) => {
        if (num === 0) {
            return "zero";
        }
        const numbers = rank(num);
        let result = [];
        for (let i = 0; i < numbers.length; i++) {
            result.push(_toReadable(numbers[i]));
            if (i === 0 && numbers[0]) {
                result.push("hundred");
            }
        }
        return result.filter((a) => a).join(" ");
    };

    return conclusion(number);
};
