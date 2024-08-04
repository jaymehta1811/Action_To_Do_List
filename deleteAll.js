function Delete_All(){
    
        // Select the ul element with the class 'task-list'
        const ul = document.querySelector('.task-list');
        
        // Check if the ul element exists
        if (ul) {
            // Set the innerHTML of the ul element to an empty string
            ul.innerHTML = '';
        }
    }