function findMatching(names, searchTerm){
    function testMatch(element){
        return element.toLowerCase() === searchTerm.toLowerCase();
    }

    return names.filter(testMatch);
}

function fuzzyMatch(names, searchTerm){
    function testMatch(element){
        return searchTerm === element.slice(0, searchTerm.length);
    }

    return names.filter(testMatch);
}

function matchName(drivers, searchTerm){
    function testMatch(element){
        return element.name === searchTerm;
    }

    return drivers.filter(testMatch);
}