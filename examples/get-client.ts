import { Panel } from "3x-ui";

const local = new Panel("http://username:password@localhost:2053");

const clientByEmail = local.getClient("email");

// for vmess, vless protocols
const clientByUUID = local.getClientByUUID("95e4e7bb-7796-47e7-e8a7-f4055194f776");

// for trojan protocol
const clientByPassword = local.getClientByPassword("password");
