import Context from "../Context";

/**
 *
 * @param e
 * @param context {Context}
 * @param data
 * @returns {Promise<void>}
 * @constructor
 */
async function HandlerReceivedOfferIce(e, context, data) {
    // console.log(data);

    let answerPC = context.getData(Context.KEY_ANSWER_PEER_CONNECTION);
    await answerPC.addIceCandidate(new RTCIceCandidate(data.ice));
}

export default HandlerReceivedOfferIce;