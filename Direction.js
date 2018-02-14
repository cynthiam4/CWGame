findRoad = function (buffer) {
    result = [];
    
    //gathers tiles on top/bottom
    for (var i = buffer.x; i <= buffer.x + buffer.width; i++) {
        temp = [buffer.y, i];
        temp1 = [buffer.y + buffer.height, i];
        if (walkerMap[buffer.y][i] == 1) {
            result.push(temp);
        }
        if (walkerMap[buffer.y + buffer.height][i] == 1) {
            result.push(temp1);
        }

    }
    //gathers tiles on right/left
    for (var i = buffer.y; i <= buffer.y + buffer.height; i++) {
        temp = [i, buffer.x + buffer.width];
        temp1 = [i, buffer.x];
        if (walkerMap[i][buffer.x + buffer.width] == 1) {
            result.push(temp);
        }
        if (walkerMap[i][buffer.x] == 1) {
            result.push(temp1);
        }
    }
    return result;
}

function arrived(rect1, r2X, r2Y) {
    return (r2X < rect1.x + rect1.width && r2X > rect1.x) &&
        (r2Y < rect1.y + rect1.height && r2Y > rect1.y);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function setDirection(current, next) {
    result = 0;
    if (current < next) {
        result = 1;
    } else if (current > next) {
        result = -1;
    } else {
        result = 0;
    }
    return result;
}

function setFace(x, y) {
    if (x == 0) {
        if (y == -1) return 'NE';
        return 'SW';
    } else if (x == -1) {
        if (y == -1) return 'N';
        if (y == 1) return 'W';
        return 'NW';
    } else {
        if (y == 1) return 'S';
        if (y == -1) return 'E';
        return 'SE';
    }
}