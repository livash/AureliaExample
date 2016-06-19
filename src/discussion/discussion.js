function getDiscussionInput() {
    // fake data access
    return '';
}

function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}
export class Discussion {
    constructor() {
        this.discussionInput = '';
        this.originalInput = '';
        this.description = 'Discussion input:';
        this.warn = 'You have unsaved discussion data, do you want to leave this page?';
    }

    activate() {
        this.discussionInput = getDiscussionInput();
        this.originalInput = cloneObject(this.discussionInput);
    }

    save() {
        // simulate save
        this.originalInput = cloneObject(this.discussionInput);
    }

    canDeactivate() {
        if (JSON.stringify(cloneObject(this.discussionInput)) != JSON.stringify(this.originalInput)) {
            if (confirm(this.warn)) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
}