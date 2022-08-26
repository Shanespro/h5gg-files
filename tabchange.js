let tabs = ["nav", "page1", "page2", "page3", "page4", "page5"];
        function changeTab(value) {
            tabs.forEach((a, i) => {
                if (i === value) {
                    document.getElementById(a).style.display = "block";
                } else {
                    document.getElementById(a).style.display = "none";
                }
            });
        }
