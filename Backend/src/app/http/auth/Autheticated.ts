import { Request, Response } from "express";
import md5 from "md5";
import jwt from "jsonwebtoken";
import { knex } from "@src/config/connection";
import doteEnvConfig from "../../../config/doteEnv";
import dayjs from "dayjs";
doteEnvConfig;
// import { config } from 'dotenv';
// config

export class Autheticated {
  static async signUp(req: Request, res: Response) {
    let { data } = req.body;

    if (data) {
      console.log({ data })

      data = {
        ...data,
        user_password: md5(data.user_password)
      }

      const existingUser = await knex('users').where('user_email', data.user_email).first().then((response) => {
        if (!response) {
          return true
        }
        return false
      })

      if (existingUser) {
        const userKnex = await knex('users').insert(data).returning('*').then((response) => {
          return response[0]
        })
        const secretKey: string =
          typeof process.env.API_KEY == "string" ? process.env.API_KEY : "";
        const token = jwt.sign(userKnex, secretKey);


        return res.status(200).send(
          {
            message: 'Usuario criado com suceeso',
            // token: token,
            response: {token, user: {
              user_email: userKnex["user_email"],
              user_text_name: userKnex["user_text_name"],
              user_id: userKnex["user_id"],
            }}
          }
        )
      }

      return res.status(409).send(
        {
          message: "Ops, Já existe cadastro com esse usuário"
        }
      )
    }

    return res.sendStatus(400)
  }

  static async login(req: Request, res: Response) {
    const response: {
      status: number;
      success?: string;
      error?: any;
      data?: any;
    } = { status: 200, error: [] };
    const { data } = req.body;
    const { user_email, user_password } = data;

    if (user_email && user_password) {
      const encryptPassword = md5(user_password);
      const user: { data?: Record<string, any>; exist: boolean } = await knex(
        "users"
      )
        .where("user_email", user_email)
        .andWhere("user_password", encryptPassword)
        .first()
        .then((res) => {
          if (res == undefined) {
            response.error?.push("e-mail ou senha incorretas");
            return {
              exist: false,
            };
          }
          return {
            data: { ...res },
            exist: true,
          };
        })
        .catch((e) => {
          response.error?.push(e);
          return {
            exist: false,
          };
        });
      const userResponse: {
        user: Record<string, any>;
        menus?: Record<string, any> | void;
      } = { user: {}, menus: {} };
      if (user.exist == true && user.data?.user_active == true) {
        // const modules = await knex("modules")
        //   .where("module_fk_user_type_id", user.data?.user_fk_user_type_id)
        //   .then((res) => {
        //     return res;
        //   })
        //   .catch((e) => {
        //     console.error(e);
        //   });
        // const menuByModule = await knex("sub_menus")
        //   .where("sub_menu_fk_menu_id", null)
        //   .then((res) => {
        //     return res;
        //   })
        //   .catch((e) => {
        //     console.error(e);
        //   });
        // const menus = await knex("menus")
        //   .where("menu_active", true)
        //   .andWhere(
        //     "menu_type_client_fk_user_type_id",
        //     user.data?.user_fk_user_type_id
        //   )
        //   .orderBy("menu_order", "asc")
        //   .then(async (res) => {
        //     const mergeObjects: any = [];
        //     for (const i in res) {
        //       const subMenus = await knex('sub_menus').where('sub_menu_fk_menu_id', res[i].menu_id).then((res) => {
        //         return res;
        //       }).catch((err) => {
        //         console.log(err)
        //       })
        //       mergeObjects.push({ ...res[i], sub_menus: subMenus })
        //     }
        //     return mergeObjects;
        //   })
        //   .catch((e) => {
        //     console.error(e);
        //   });
        const secretKey: string =
          typeof process.env.API_KEY == "string" ? process.env.API_KEY : "";
        const token = jwt.sign(user.data, secretKey);
        userResponse.user = {
          user_email: user.data["user_email"],
          user_text_name: user.data["user_text_name"],
          user_id: user.data["user_id"],
        };

        // userResponse.menus = { menus, modules, menuByModule };
        response.success = "Login realizado com sucesso!";
        response.data = { ...userResponse, token };
      }
      if (user.exist == true && user.data?.user_active !== true) {
        response.error?.push("Este usuário esta inativo");
      }
    }

    if (response.error?.length > 0) {
      response.status = 419;
    }

    return res.status(response.status).send({
      error: response.error,
      message: response.success,
      response: response.data,
    });
  }

  static async authMe(req: Request, res: Response) {
    const { token } = req.params;
    const response: {
      status: number;
      success?: string;
      error?: any;
      data?: any;
    } = { status: 200, error: [] };

    const secretKey: string =
      typeof process.env.API_KEY == "string" ? process.env.API_KEY : "";
    let decode: any;
    try {
      decode = jwt.verify(token, secretKey);
    } catch (e: any) {
      response.error.push(e.message);
    }

    if (decode !== undefined) {
      const user: { data?: Record<string, any>; exist: boolean } = await knex(
        "users"
      )
        .where("user_email", decode["user_email"])
        .andWhere("user_password", decode["user_password"])
        .then((res) => {
          if (res == undefined) {
            response.error?.push("e-mail ou senha incorretas");
            return {
              exist: false,
            };
          }
          return {
            data: { ...res },
            exist: true,
          };
        })
        .catch((e) => {
          response.error?.push(e);
          return {
            exist: false,
          };
        });
      if (user.exist == true) {
        response.data = { isAuth: true };
      }
    }

    if (response.error.length >= 1) {
      response.status = 419;
    }


    return res.status(response.status).send({
      error: response.error,
      success: response.success,
      response: response.data,
    });
  }
}