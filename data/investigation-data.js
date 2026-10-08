// =========================================================
// 調査データ
// =========================================================

const investigationData = {

classroomStudentBook: {

  title:
    "学生手帳を探す",

  completionFlag:
    "studentBookFound",


  targets: {

      desk: {

        label:
          "自分の机",

        flag:
          "deskChecked",

        x:
          "22%",

        y:
          "43%",

        result: [

          {
            name:
              "{NAME}",

            text:
              "（まずは自分の机かな。机の中と椅子の下を見てみよう。）"
          },

          {
            name:
              "タブレット",

            text:
              "周辺をスキャンしました。学生手帳に該当する物体は確認できません。"
          },

          {
            name:
              "{NAME}",

            text:
              "（あると思ったんだけど......ここじゃないか。）"
          }

        ]

      },


teacherDesk: {

  label:
    "ロッカー",

  flag:
    "teacherDeskChecked",

  findCharm:
    true,

  x:
    "51%",

  y:
    "29%",

  result: [


          {
            name:
              "{NAME}",

            text:
              "（教室に入ってきた時、ここの近くは通ったけど……。）"
          },

          {
            name:
              "タブレット",

            text:
              "候補：ユーザー名、{NAME}と一致する文字列を認識。"
          },

          {
            name:
              "タブレット",

            text:
              "ユーザーの足元から反応あり。"
          },

          {
            name:
              "{NAME}",

            text:
              "（足元？一体何が......）"
          },

          {
            name:
              "{NAME}",

            text:
              "あ、私のお守り！"
          },

          {
            name:
              "{NAME}",

            text:
              "わざわざ神社に行って名前を入れてもらったんだっけ。いつの間にか無くなってたけど......こんなとこにあったんだ。"
          },

          {
            name:
              "タブレット",

            text:
              "紛失物の取得を確認。\n......学生手帳の候補となる物体は確認できませんでした。"
          },


          {
            name:
              "{NAME}",

            text:
              "（うーん、ここにはないっか。）"
          }

        ]

      },


      back: {

        label:
          "教室後方",

        flag:
          "backChecked",

        x:
          "77%",

        y:
          "46%",

        result: [

          {
            name:
              "タブレット",

            text:
              "周辺をスキャンしました。複数の小物を検出。"
          },

          {
            name:
              "{NAME}",

            text:
              "（消しゴム、プリント……あと誰かのペン。私の学生手帳はないな。）"
          },

          {
            name:
              "タブレット",

            text:
              "探索対象との一致率はいずれも5％未満です。"
          }

        ]

      },


      shionDesk: {

        label:
          "一ノ瀬の席",

        flag:
          "shionDeskChecked",

        x:
          "62%",

        y:
          "58%",

        findStudentBook:
          true,

        result: [

          {
            name:
              "タブレット",

            text:
              "探索対象と一致する物体を検出しました。"
          },

          {
            name:
              "{NAME}",

            text:
              "えっ、ほんと！？"
          },

          {
            name:
              "{NAME}",

            text:
              "（……あった！　私の学生手帳！）"
          },

          {
            name:
              "{NAME}",

            text:
              "（でも、なんで一ノ瀬の机の近くに……？）"
          },

          {
            name:
              "タブレット",

            text:
              "探索対象を回収しました。"
          }

        ]

      }

    }

  }

};
