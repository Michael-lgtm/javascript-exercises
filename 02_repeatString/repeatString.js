const repeatString = function(string, num) {
    let end = '';
    if (num<0) {
        end = 'ERROR'
        return end;
    } else if (num===0) {
        end = '';
        return end;
    } else if (num>0) {
        let i = 0;
        while (i<num) {
            end += string;
            i++;
        }
        return end;
    } else if (string === '') {
        end = '';
        return end;
    }    
        else {
        let i =0;
        while (i<num) {
            end += string;
            i++;
        }
        return end;
    }
};
repeatString()
// Do not edit below this line
module.exports = repeatString;
