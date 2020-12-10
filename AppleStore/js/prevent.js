    window.onload = function() {
        document.addEventListener("contextmenu", function(e) {
            e.preventDefault();
            alert("Trang này thuộc bản quyền của Sự");
        }, false);
        document.addEventListener("keydown", function(e) {
            //document.onkeydown = function(e) {
            // "I" key
            if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
                disabledEvent(e);
                alert("Trang này thuộc bản quyền của Sự");
            }
            // "J" key
            if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
                disabledEvent(e);
                alert("Trang này thuộc bản quyền của Sự");
            }
            // "S" key + macOS
            if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                disabledEvent(e);
                alert("Trang này thuộc bản quyền của Sự");
            }
            // "U" key
            if (e.ctrlKey && e.keyCode == 85) {
                disabledEvent(e);
                alert("Trang này thuộc bản quyền của Sự");
            }
            // "F12" key
            if (event.keyCode == 123) {
                disabledEvent(e);
                alert("Trang này thuộc bản quyền của Sự");
            }
        }, false);

        function disabledEvent(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
                
            } else if (window.event) {
                window.event.cancelBubble = true;
                
            }
            e.preventDefault();
            return false;
        }
    };
