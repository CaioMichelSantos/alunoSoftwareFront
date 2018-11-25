import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { isUndefined } from 'util';
import { empty } from 'rxjs';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    users: any = [];
    chatActive: string = "";
    isChatActive: boolean = false;
    activeId: string = "";
    chatToId: string;
    chatFromId: string;
    message: string;
    toMessages: Object;
    fromMessages: Object;

    constructor(
        private chatService: ChatService,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        this.getUsers();
    }

    async getUsers() {
        try {
            this.users = (await this.chatService.getUsers())['users'];
        } catch (err) {

        }
    }

    async showMessages(toId) {
        await this.activeChat(toId);
        await this.getToChat();
        await this.getFromChat();
        await this.getMessages();
    }

    async activeChat(toId) {
        this.chatActive = await "active_chat";
        this.isChatActive = await true;
        this.activeId = await toId;
    }

    async getFromChat() {
        let fromId = (await this.authenticationService.getLogged())['_id'];
        try {            
            this.chatFromId = (await ((await this.chatService.getChat(fromId, this.activeId))['contents']).pop())['_id'];
            console.log(this.chatFromId);
        } catch(err){
            await this.chatService.createChat(fromId, this.activeId);
            let chat = await this.chatService.getChat(this.activeId, fromId);
            let contents = await chat['contents'];
        }
        
    }

    async getToChat() {
        try {
            let fromId = (await this.authenticationService.getLogged())['_id'];
            this.chatToId = (await((await this.chatService.getChat(this.activeId, fromId))['contents']).pop())['_id'];
        } catch(err){
            console.log(err);
        }
        return this.chatToId;
    }

    async sendMessage() {

        let fromId = (await this.authenticationService.getLogged())['_id'];
        let chat = await this.chatService.getChat(this.activeId, fromId);
        let contents = chat['contents'];
        console.log(contents);
        if (isUndefined(chat) || contents.length == 0) {
            await this.chatService.createChat(this.activeId, fromId);
            let chat = await this.chatService.getChat(this.activeId, fromId);
            let contents = await chat['contents'];
        }
        
        contents.forEach(chatContent => {
            var id = chatContent['_id'];
            console.log(id);
            this.chatService.sendMessage(id, this.message);
        });

    }

    async getMessages() {
        console.log(this.chatToId);
        this.toMessages = await this.chatService.getMessagesByChat(this.chatToId);
        this.fromMessages = await this.chatService.getMessagesByChat(this.chatFromId);
        console.log(this.toMessages);
        console.log(this.fromMessages);
    }


}