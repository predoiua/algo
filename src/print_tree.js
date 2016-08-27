

lst = [4, 1, 3 , 2, 16, 9 , 10, 14 , 8, 7]

var is_at_level = function (level, index) {
    index = index + 1
    var idx_start = Math.pow(2, level)
    var idx_stop = Math.pow(2, level+1) - 1
    if (idx_start <= index &&  index <= idx_stop) {
        return true
    }
    //console.log("not lvl " + level + " idx " + index + " outside " + idx_start + "-" + idx_stop)
    return false
}

var format_level = function (lst, level) {
    var idx_start = Math.pow(2, level)
    var idx_stop = Math.pow(2, level+1) - 1
    var nr_el_on_level = idx_stop - idx_start + 1

    var height = Math.floor(Math.log2(lst.length)) + 1
    var nr_max_els = Math.pow(2, height + 1)
    var space_size = Math.floor(nr_max_els / (nr_el_on_level + 1))
    //console.log("pace size" + space_size)
    var space = new Array( space_size ).join( "_" );
    var line = space;
    for (var j = idx_start; j <= idx_stop; ++j ) {
        var el = lst[j-1]
        if (typeof el != 'undefined') {
            line = line +  el + space
        } else {
            line = line +  space + space
        }
    }
    return line
}
var print = function (lst) {
    var height = Math.floor(Math.log2(lst.length)) + 1

    //console.log(height)
    for (var i =0; i < height; i++) {
        var line = "H: "
        line = line + i + ":"
        line =  format_level(lst, i)

        console.log(line)
    }

}

print(lst)