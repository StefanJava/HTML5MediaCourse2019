import "./ClientList"
import Tpl from "../views/MainApp.html"
import Events from "../Events";

const MainApp = Vue.component("main-app", {

    template: Tpl,
    data() {
        return {
            targetSocketId: "",
            output: []
        }
    },

    computed: {
        outputMsg() {
            return this.output.join("\n");
        }
    },

    methods: {

        setContext(context) {
            this._context = context;

            this.$refs.client_list.setContext(context);

            /*$(this._context.socketConnector).on(Events.MSG, (e, data) => {
                console.log(data);
                this.$refs.output.value += data.msg + "\n";
            });*/
        },

        selectedTargetHandler(target) {
            console.log(target);
            this.targetSocketId = target.socketId;
            this.output = target.chatLog;
        },

        submitHandler(e) {
            e.preventDefault();   //阻止事件默认行为
            console.log(e.target.msg.value);
            if (this.targetSocketId) {
                this._context.socketConnector.sendMsg(e.target.msg.value, this.targetSocketId);
                e.target.msg.value =  "";
            }
        }
    },

    watch: {
        output() {
            this.$nextTick(function () {
                this.$refs.output.scrollTop = this.$refs.output.scrollHeight;
            });
        }
    }
});

export default MainApp;