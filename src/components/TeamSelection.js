import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const teams = [
    {   
        teamName: 'Joe Bukets',
        name: 'Joseph Guidi',
        league: 'DSG League',
        record: '8-2-0',
        current_placement: 4,
        placement_out_of: 10,
        imageUrl: "data:image/png;base64,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",
        last_matchup: {
            opponent_team: 'Team A',
            opponent_score: 72.1,
            ally_team: 'Team 1',
            ally_score: 76.6,
        }
    },
    {   
        teamName: 'Bad Boys',
        name: 'Joseph Guidi',
        league: 'DSG League',
        record: '8-2-0',
        current_placement: 4,
        placement_out_of: 10,
        imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABYlBMVEX///8AAADzUkSVVzqPTS7g4N7W1tQWFhbIyMg5OTl6QyqxsbD7+/v3U0WaWjyqqqp9STEnFw/d3dvqSjvm5uOLi4ldXVxFKBuWlpa3t7aMUjbS0tJsPypCJBU0NDRoaGby8vKDg4PCwsAmJiZUVFR0dHQYCAYpKSlCQkIcHByioqLoTkGRkZHHQzhGRkYXFxeGSSuCLCSkNy7VSDx8fHy3PjPRUERsbGy2V0yTalcsDwxEFxNnIx1zJyCfU000KinCUEZ/MitQOzOJWEFvXlVlTD8AERRfMx8/FRJTHBiRMSk0HBLWRDYrIRw0EQ4nDQuuPjXmVkpGIR4fEgxWMyOCWkm0Rj2IPDVsOzYOHh7TV0y9U0udQjtILy1/OjV5REBjQz9YMC1CJyR4SURqLyqoVEweKSgAISI0IB5ZKyeUPTbrkovppJ3jsquxWVDbu7b04d73jIPpOih8YVNaSkNqRTSEGBYyAAAXrUlEQVR4nNWd+V/bSLLAMSDfisErjI0cI5/Ylg34giyYHDM7ARsHcGCSDJDJMdnZGXZ2dt57u///k6WuVrcuS7JkZ+qHfCKjo7/q7urq6urS0tL8JC6JkAzHEunGRh7JRqOeyBSCwuRvcyyK5xIXuGQ4fbi7FzCVUCSVLiQZTlh0WV0Ix4frqR1zNlKKpY0Cz/ypapPPpLdt0mHKVCPG/0kguVh+N+QMD0m1m+YXXfqpEo+VSzVXeIpEtuvcohmsRMhHZsGTJZQrBxfNYSbJbauSV7RicW4xs2gWAxHCKUOuo7PB4GTY7jU7oiguIxHFTqfZaw9P+oPjC0PUXExYNBEtQuFQX8rLQb/V7o1YJMuUwK9iUwIdXOivriaYRVOpEg+XdQU8Oxn2Oss6MJ3ImJ1euzXQ1WXpq6lHvlHU4rV6TXE6Hcm53OkNB1rGcuZrGCGF+q6mXCdSn3NAp0KOOsMj+lY73eSi+ZaCJXp0P2q7wQPKZbGnqchcYsGAG3R5jnvLbukwZedE0x0XaQJwEbIol4Om69qjGMUWrVsX1huFGGnAXPZ7nvAhxjMSsbuYauTyZCH6PdErPlmaVD2WwguoRp600c7aI0/5JkqnSfbHSGLuiIUq8fxWx1s8hVHsEWNHLT9nxAQxyF9QDdSzzigJpVZTcwVsEE8+IRqohDccihZldio9wparCnPji3eJCmyTlSYOpRJ52WTZTl991s68DByBUKLSEIgLw4pt+Y0PvVQ6rDi8VGtxPk4OEvCE6IHY4Ap52Uwlxit13NidByIJOCRsNHaIf77yduRgm6qtWpoDogp42SaNUFbV7Wdej42ETt313YmjKpmLnqYgL/Cfeh4jLosqot8atY6fdKQFZEVQCS+87YhaRF8BM/g5Z01dPbE9ue0+zDyBMhK2pfZFHwHDOQzYwRidFzAAsoPAxYuOH3w0Ytc3A44p4Saq1qA0RgzQmCFpBO9mUBaINb/m/QL2qF2oqkQerF6gQ9aXBooF98VI2BfAeBoeULnC7xUZHG1fyUBUdZPyZUocxjP6tgqIDONLz8cHQ1GN1K7gPaCAtUxLBcSd/1ivWv2QJjbgfFjZwFP6Pox2BKD6o7/CXuHZlOfttIBrCw8HbXXu1vJPhWoQ8Vvd9RhQgDl9Bfe4K2yHVjydL00R3BVj3hJicxTDNI/x2DEfTaoI24EXW/R0PlyAKhzAkzp4RnN0ZVUi7xF78OCyh4ACXh2ETsjixnI5X0DCttkpeEcYg9WXtvYpgUrbsjh+yAjmMIeCV4BJsEcHaExgm4QWnTvhMm6nntmnCagvNKyzIh54TxYAyGLrreSRsmHAvd2CYR3bhwPLoviG2AR9WvdkHhWHeT1Metkr6Ahnfk0Gp0gPVqaqnkQzCBChNkRvUB0o5mNva4VVh2JveiL0QmyuYcNpuAg+CZBYW8wJHhDCYI+0ptoJ+gtpo2xH9YEHPLHdwPl0hFwVIgyFc5oTWgMGdmYnhKV6GPjwULiQNso2acBAYGYneBLuBCMFmGuDhbTR5pkGcPZlRZhU9KEXouPKPCcUKqCqRcEtFppxKizAaI9qjIWRYjCfST0tHQIQ2yHp2QghoOQYngFPcKVmjMMU7YvqNukGORjFZmym0EjRIgUL9pqr5SX29qksv4/dAYqqqy3IMEG0yyE3k/MUvNwV5LgXYSx0V4XtlyFJAs+eu6tFbHGXkwzDJOHtN2YhTKCJ4YnS67Af6MJVEdm2crVbwmV0fbHOSYQMOMdmmiZCzAWspIGecbfKOyshVuQbMiGPGtgsPn4GxW5fKJqU7aF54aW7CK/ZCS9BkU4kCe+/7p4wjKYVLU0jdWnOzNxKYVaT4ieEXAwVZ4ZwKbgFGt2xLmsuiBBs4khGJoTIM/dTfQHFxx716Ebq1mADwp/dEsINaoqqCSJtWnPdEWGsGHSo+wdcu9fGB4q4tYewrzQtE3Kw3pcu1Lup3d1tx3EaPBpT0WITtJGK+2nTjDYNC2tPeWlATCaZhHaDnNPKDINiURopWIUDP2ItbeBJMkKaYDe9sV012GJVdKZzwAUF3bBZoap0rmjs8njSxHt9PRUlzghh3R4cNFfQDec1b0JoB7fP31y13757v/PDyymADgk5pIz7yvOgG1747r1AnXV8e/fkfth68e79s+loiuw6JESXIb/2CA23PnZDhHZ79/e3P570B69/qdkkQ1Jz6NIAQuShgYW7Ex/Rfn/64dOvxxe/7IWcoU0kVG04Hfl55Urkr2Bh8uvZWgwL4Tfs+PnTnz4+c7d5WJZiQXAIJwuaRIPXsEkBz8omiuOxKB48+fAx8oMbplouspsqN9CuspArwKW8cjWaWMDk7MhM0bDL9iKiWFY8aPbuP3yTc472svYK/a8b5iYC/ih37ii08HuGbCykSg2CEmUZ9drtpg1Gdvzm7TOnvezlD8X3n760Hh7u75E2OEzKdhuqhYC7FRpklR7TE4tjw7mhEsZ7NJxqk7N3X5xU3csfnr1/97Z99ebN89uxrI2QYRVRCBuo87ryC8erNCEMFoYFF9HUcdC2nByz4wftflMztJ+fffxw32tKhsxYXFatWRxAEJQJ68h0dhUiFUdlGSDCC+pQI9iTWRlYxH+x4x+nts+XP1c/Pr3rdDpjSRXpDXUcQVBQJsHIOHW1yhZHDQB5u5evhi/6XwavXxg3UqKMJ2a9UQKcWnef7+Bk4ykIC7Zjg+OYcKyLCunKkREP0ISW7tw2VUyzAJQHLU8odH108fnjT0+f3H5AVXhv+AaBWBQ7FbiUvJErx7eW0EpEjc3fbxp1x+eqjgm9+vxr/8uHp3+/G6MXB5PbL5S7WHmnojiSmu1kT3v/2GDrfsClzxQI7YRbiNo1r8qwo22r7Pgd/PXVl4cnt2OqTbAH75W/TZw46A8SV7PZ603ABsapF7Bs+E3Y0T9Tr1UPQMu8litO+5Leor/eSy2x2btqt4cS2Jn21ZnITK3UBiHbNnpqX2P9fADAWyNVxL5BavF1XwI7sq4ynbjaSeOEEHzhN+vkY49a1N5Z1Auvnxjf4+C1MyhS0q48pk4I0amVaPQx9eSLK1xd7C367ZNRBep2qDuQYqrgziVsnxCPhufRaDR7Tj2+D72R/Qn98tTgflpdPE1CteJONdVNx3jBFZtjQvD230Qncko11T6c9DP6Yay7n2jYjfVYxVx1t5Q67DYSheAsZFrC/vQMLNANo0geXxMFUyqRHcPxc62eaVpXYGgnUkqVu/lGPRNOegGmI7y4mrrSBCodCKOnRHdE61ZP4bh2T9filbo4T0mxWjrMp+uJWCYc5HzZ6QSEgUrLek6EHannUVXUporWrT7hol+/JRGHBiNetZ4pFMJ80udcfHH1icfavYY0IXTDU4IQK1UU4zAmsgeEPmBEvOuGkpyvYEaEUjVadEY8ZVsnCUGlKi+H/Z0ylD/CbjdSx+RiAvx3Ppk+SEKpaensTJUQR2MSzfQUdkShdasP1N0CP8u1qMbdT9YEl9SNOfkFEAYCbbM1MWLv47mukaIMC6I2B9Q/DibjKI7hCuWFyTORA9PnnbBmhIG+ibObHanaEBCzSNGg0HD27hft3WrPiWjqIsxgkV+hNpeUdDrCwLGJE4aMaX2sEN7AWxkpZzygecULlXT9HqvRHAaCNc/uYggDlRPjcYOMSz6n9Ay4j18ohy8PDp6piEBL1BiEQs4lORQQ7uLdv5NqNPEHaxBP4XTUSG8/KcfvD/BMlxDCySKgh+3NI8UXEG4HyYx6ly1jfymNCHoGLabiud9bUZolvQvQQu0HhZDkeWhTTMgxddLJaewupBHRUIFXAJBN8HISS6X1uNEJS4JFo199J+R4KrGl4bhBIoKdguYV7MEn5VgJpGHFB3L4px0QQh79PIdmShAyDLeRIwplqHBIRASKNiuyz1HFYD/a/St8UlHj6oRmWvZf11CEDBcjq9FwYzOrDcK+GKG/IC+u6gtl36gqNUen8QoiXeN0PXdmQobh81T2Kxu1CHPnMTLZXt3hi9jnRC1SXpY4JCr0P3+ZlpBJxogsl3YQYZ9UB1XYrwfqNSzhdwpRiS4ySO/6PyTqCKVqJMYN4x34JOIRnABhoeSSBxsghUxXIkB38D3vlQEhwyTUUhluCiL7Il4OR9P7vaemhIFdQX1wHv224XczNSTkgmpLbU0ZNOAn8aNy/PmWaKQiTRjYURULzhEjmJbNR0KpN5bxYGY488eIODhMRCUmVx5Z3TpATnV6gpno4U5mJ4RMMA8fOzBZ8FYQj7G/W0R+xHckIfRNNfxuBytP2NLpZzIhK0JGtVONA0/YZmswaKlxxOIPBoQ4UlS162vpsCKwQyAQdiVBu/3XlBAHyQcqRoCTTtbpEH1URFGgv5KE4KDhgoQlkYvIUtUcO5RS12ZkhjkhB0OWaZgi5bcSv1FOfk0Oh+Cfiy8xBsnOZ5SSvVo0J2Q4KNSRaqSYr4GLyKQJPRCE4J9bIrMzeSb2dJQFIcPArWBMFO+eyHJraAagk4nhgoVhU36UJqP07GLPCQKEqaQeEEdbwebgg38ox0aRGthqk8w2/BuaYCF1WZ/5oxG02AvNAMJaOcbrECEEfACm5445obqAHfh0t4wiqtEPsP4eo/Jmzyo2d10SnqhUusBp2qoyih/BHNeSkD34DHcqPiiuYHCx4uB6449HuJOIzQ3elK9ttxtjKMZuYLf8tNfs2CFcFh/UUKgvk3k+dpML+HFcIZZQBbY0RdIJOxJDZlNucpCxO7OM0w0ntx2jxsRCOPhPrDqnELLjL+qNPt+re/pN1TqDzN+cTa2IhtCUM2NdTQMpC9qKQ6ib34h2aEkoIX5WbxT6cQyN1NQZg5Nx2HPXQPp7h2mH4glqvaik1ancb6JdQgmRdJO+AsvW3PjA2ydtKQ0etVLHoVFCo6R6LjZ04+K/xn8BEZ+/efPkye+/G46HMiL7E7n0jYovmD4atj7a27UFeaxcOOjimTJ0Yn6y02giSUmCE/m3SkiKGeMTXcCMVSeDFQxbhU6g8dTdJrZCQza080vCH38EAc6K0AyTPfhCh+NvW7XATNHGSSB1dGO3jo9kbFtZlpUYeQVuUo/Jf49HoyaSzmg0lZIdE37SwBTLg3PiroHBxb3ziguj0sQF7g+pGjP1je7h9t++DAbHx8dnZ2fHx4NBv39y0hq2eyNzSlak1mVKlo0q76CZ5mcmlNDgP3z6sBTJFU22f1QqR2fH/VZ7ZAYpksvdRaugSWimJWF66dBm0llzZCzFw/a/inc5GI6MINnlOzJW3yJHUBzm2TYI0UQgNwOh1DoTJS3FVOm3R6KecfyRPKdu5ozAq0Hd6Y4LVLRcZnLgInAqzvD1asCdDNrNkYaR/Wc6N/3CGaTqcNDgwmntN6ucSb/dFAlG9n/+WApbfmZvZik6qUW+Xra5B8RCzkD1IEDptaWnXzWD2LdtJNVifpvr9fPNG0lOs6fSv5ub5+vmocuV/nDEThj/VwacGEt+tlS7a+SZlEkp1jeza2trW7KsKKIcrK1lbzb19qcsx60OKwHiBpT03gGFxV4dFgwdC5XNLECZy9rNueG1J6PfiAlcvG50kicimEERTy/ov3Zbkapu5dGjR1MBVyZnbZ2eG1Qm/fWtYKkWshS4LLRnddZeiDqtVp1u6Bl8cvP6/GZtxRadSrmS3dRT0t+K5WNWkkC9pJbPWJ2WAfdtQz608X0vfkNjuVxv3mQd0WHIrayuwUZi9i0PnPjC1mk1m7suOO14fH6T3XKBB5BrWa3uObS9eyAIVwiWp6GpRc4eYUY7GJ9vrbjmUyC3shrEXN7m2glnzyGFfOa7diZaXF6nYTZn45sgrq1rb7prT59jdWs5lRTQ1CJl473xBgP87IQresJAqGyrpYJv3TJ+iEPNbrrXSmhQZfCV0GY6bnBIFa2MachVnRem3I2j5g9VaCAeEh7mKSWWnlaiJXXF26pV86jgU/Z3xcPk+k81H4QVNA8JN7hMmXyKjW/h2nFIQfCGdd8WyAWuWjnDMBCu6ykhx9TJiXRpaksFh1TIYiQAb6nlggxHfPBPUnRBzidChuHCG8S7LE5dJoLVU4sTM0hlWIW/M6SV1g0rjl9/CKUbJwiNvTdtc6QNhxQssFgQBkkFkEDrE74RMgxPBidsmBd9IhD5beEpRInzauZNnieeVwrDqoSPhAxXJyzfKbGy0H/MB30UbLdjOqIU1IdJgNw8CNWchxM5tLRFCqjbmmYqgw9RmYWGxzN7xMNSuAr9JWSoxcmU5agBw7TZYCDkUe0Yq9t4jDJEF0MYKFnVYh7OMmmFEBhibJZqABdFaFmLkJErkEsIhn9HA0HZ8K8awIURWiLi+dzedjrD6ySDmrFhGtPYnvZBiyK0QuSI04o5newgvWy0xB3TPmaBhFazO305jcTA1aE+pXKzuSBCIkGBeSpZe35HPSHxZrJbCyPcIhBNa1Fo2Ah805kEhEc0+2hxhPjRkmwLpoiJqYFvRa1ZSgTdZx+tLJBwhUC0WG/g81MItd+15NRVg6xUBvuEj5DYOrRFuEI0VIs5ksCnrepR98luVctMAB0Qfv+NIt9Sh98ZH9ojJBB3razwOMfwmbSxFLQXchEK0AHhd8qvr76lD783PLRJuLKCHaquEj4ZCd7dc/rII8JHRoe2CTGiV18Wj4Me3URl8JzQYR2urMHq6oyfHAGBOe/6mmeEyuF/3dbhCmz/theMOFVg3nwD91884RrSNuYzdUcCfhm8nOuC0LDjuSfElejNF1TRzc7x7W0Qbn0rC0aSj76Hw//7qyzo8Bk6/NY+4aMs6okNwUPCGweEW8XK9UTwivK11eFeTTqo7aEH2KpDaKbedER0e9AztgjdJDR2QriCimBrFdAu4dbXRPgI5UOJeEm48jUS2lyr9oHQzdakhRNGvybCFURoIxrGPuHpqgNC55nunRHiInipSx+vrq7aJVz5myLIdbf3H/noO7Q/tPaf72SBw2+Uw/+u2CeEk6h0Na4FDVuV1VXE6Nym0Zpp1OEz5zbNKtg03qRtgeXC01XEuGjC1dV9lJco5M0ufHCzna8iWSzhpARR9INHX6LG6ftQJeI3OH9ChW91HxwZHmXDiMP0aT26aEL0iiHBm2cfvcfLvudRl4R/9YYQNSJQM4FDrxKaCHiD+Pk+RVhIJq3X8b97KUsRCJXDHUwoHz6b5sXgaEIMWPQu2wePgxOu9ylCed+WBaEb0REmkzGSEAMGDj0DVINQJNnXEsqQ/kWbTO5PEqqAOS+T7sTVMD2pFnWEkvhAyODtiwShCuhxfi9BDYNaj86HMK9uz1QJT/EujZo3LhpViKWL86g5oWq8upaoBaEKWPQ+zZ6gBjyvr1sSgnHnQmR7xZzwnAD0IfMVp9tgZUnoiJS8wIIQy17dl9ReghbRFqEBsfUJdghn+OStNaJm85ErwqkynTDkX6pLrvw1EIb8qkEZsbt4wh1/k5Xib5fNkzBJEua8Hge1IhCIOxtzIUwWiKDkiP/Ju8l9FrVtPuk7YbJOxEE73ZfsSuJESsvATobxmzBP+F69cY9OlwK5nbnsL2GG3HpkJ2OCNxImt0HsJnjfCMNkcraQw6RAMwlDjRrdjC+ETJjM1BuI+DkM6kWgAgCrjYL3hN0MZV+k5qFjKMlQmS9S3hNWqbAtu9ssvZRkPqAXDwlJKWaE+QNOAtv1a2j+EM5Ph2pF0GUT9YMw5LedZinaXAqV0/39mfj2o5oN6zVvFtDci5DXJqN5nI26hdyPnmo2codSc/mIjLXwuh3d164g96nPk6EOaLwtZN4ihLvakgXWH59mnUBGT08f69K5ROpzMkOni8AbJFe5PrdJuX968/hcn62mmPYoetQbEXjDpKmVdQkzagGXleAMc/GE6v58Am8WsUiSI4OeRqP7sqLd349Gs1K9rZtk3wlMvv7z1eHJIqSrXiQx3kn5nSN/Fsl0baehM5ZcqvHVqBcTYRJ559nocO01XH7pdc6SzDRKzmsyUq7r9kF8vRJn+FjXQdbtUCkd5v88eEgEjilYZXDDTXO7zjNf39BgU+LxuBBOl0s5o0Zbq6bysaR0yqJL+f/SpcR9gv18YwAAAABJRU5ErkJggg==",
        last_matchup: {
            opponent_team: 'Vattana man',
            opponent_score: 72.1,
            ally_team: 'Team 1',
            ally_score: 76.6,
        }
    },
    {   
        teamName: 'Soccer Dad',
        name: 'Joseph Guidi',
        league: 'DSG League',
        record: '8-2-0',
        current_placement: 4,
        placement_out_of: 10,
        imageUrl: "data:image/png;base64,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",
        last_matchup: {
            opponent_team: 'Dougs team',
            opponent_score: 72.1,
            ally_team: 'Team 1',
            ally_score: 76.6,
        }
    },
]

// export default function TeamSelection() {

//     return (
//         <div>
//             <h1>Select Team</h1>

//         </div>
//     )
// }


//####################################################################
// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// // Team data
// const teams = [
//   {
//     id: 1,
//     name: 'Team A',
//     description: 'This is Team A. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     imageUrl: 'team_a_image_url.jpg',
//   },
//   {
//     id: 2,
//     name: 'Team B',
//     description: 'This is Team B. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     imageUrl: 'team_b_image_url.jpg',
//   },
//   {
//     id: 3,
//     name: 'Team C',
//     description: 'This is Team C. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     imageUrl: 'team_c_image_url.jpg',
//   },
// ];

// // Card component
// const Card = ({ team }) => {
//   return (
//     <div style={{ marginBottom: '20px', border: '1px solid black', padding: '10px', cursor: 'pointer' }}>
//       <Link to={`/teams/${team.id}`}>
//         <h3>{team.name}</h3>
//         <p>{team.description}</p>
//         <img src={team.imageUrl} alt={team.name} style={{ maxWidth: '100%' }} />
//       </Link>
//     </div>
//   );
// };

// // TeamPage component
// const TeamPage = ({ match }) => {
//   const teamId = parseInt(match.params.id);
//   const team = teams.find(team => team.id === teamId);

//   if (!team) return <div>Team not found</div>;

//   return (
//     <div>
//       <h2>{team.name}</h2>
//       <p>{team.description}</p>
//       <img src={team.imageUrl} alt={team.name} style={{ maxWidth: '100%' }} />
//     </div>
//   );
// };

// // App component
// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <div>
//             <h1>Teams</h1>
//             {teams.map(team => (
//               <Card key={team.id} team={team} />
//             ))}
//           </div>
//         </Route>
//         <Route path="/teams/:id" component={TeamPage} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;

//####################################################################


// // Team data
// const teams = [
//   {
//     id: 1,
//     name: 'Team A',
//     description: 'This is Team A. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     id: 2,
//     name: 'Team B',
//     description: 'This is Team B. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     id: 3,
//     name: 'Team C',
//     description: 'This is Team C. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
// ];

// // Card component
// const Card = ({ team }) => {
//   return (
//     <div style={{ marginBottom: '20px', marginLeft: '40px', marginRight: '40px',border: '1px solid black', cursor: 'pointer' }} className={"rounded-xl px-5"}>
//       <Link to={`/select-team/${team.id}`}>
//         <h3>{team.name}</h3>
//         <p>{team.description}</p>
//         <img src={team.imageUrl} alt={team.name} class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" className="" style={{ maxWidth: '100%' }} />
//       </Link>
//     </div>
//   );
// };

// // TeamPage component
// const TeamPage = ({ match }) => {
//   const teamId = parseInt(match.params.id);
//   const team = teams.find(team => team.id === teamId);

//   if (!team) return <div>Team not found</div>;

//   return (
//     <div>
//       <h2>{team.name}</h2>
//       <p>{team.description}</p>
//       <img src={team.imageUrl} alt={team.name} style={{ maxWidth: '100%' }} />
//     </div>
//   );
// };

// // App component
// const App = () => {
//   return (
//       <div>
//         <h1 className= "text-center font-bold text-2xl p-5" >Select Team</h1>
//         {teams.map(team => (
//           <Card key={team.id} team={team} className={"rounded-lg"} />
//         ))}
//       </div>
//   );
// };

// export default App;

// Card component
// const Card = ({ team }) => {
//     return (
//       <div style={{ marginBottom: '20px', marginLeft: '40px', marginRight: '40px', border: '1px solid black', cursor: 'pointer' }} className={"rounded-xl px-5"}>
//         <Link to={`/select-team/${team.id}`}>
//           <h3>{team.name}</h3>
//           <p>{team.record}</p>
//           <p>{team.league}</p>
//           <p>{team.last_matchup.opponent_team} vs {team.last_matchup.ally_team}</p>
//           <img src={team.imageUrl} alt={team.name} className="relative inline-block h-12 w-12 !rounded-full object-cover object-center" style={{ maxWidth: '100%' }} />
//         </Link>
//       </div>
//     );
//   };

// Card component
// const Card = ({ team }) => {
//     return (
//       <div style={{ marginBottom: '20px', marginLeft: '40px', marginRight: '40px', border: '1px solid black', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px' }}>
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
//             {team.name} ({team.current_placement} out of {team.placement_out_of})
//           </div>
//           <div style={{ fontSize: '14px' }}>
//             {team.league} | {team.name}
//           </div>
//         </div>
//         <div>
//           <img src={team.imageUrl} alt={team.name} className="relative inline-block h-12 w-12 !rounded-full object-cover object-center" style={{ maxWidth: '100%' }} />
//         </div>
//         <div style={{ fontSize: '14px' }}>
//           Last Matchup:
//           <div>Opponent: {team.last_matchup.opponent_team}</div>
//           <div>Opponent Score: {team.last_matchup.opponent_score}</div>
//           <div>You: {team.last_matchup.ally_team}</div>
//           <div>Your Score: {team.last_matchup.ally_score}</div>
//         </div>
//       </div>
//     );
//   };
// Card component
const Card = ({ team }) => {
    return (
      // <div style={{ marginBottom: '20px', marginLeft: '40px', marginRight: '40px', border: '1px solid black', cursor: 'pointer', display: 'flex' }} className='rounded-lg'>
      //   <div style={{ flex: '1', padding: '10px' }}>
      //     <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>
      //       {team.teamName}
      //     </div>
      //     <div style={{ marginBottom: '5px' }}>
      //       {team.score}
      //     </div>
      //     <div style={{ marginBottom: '5px', fontSize: '14px' }}>
      //       ({team.current_placement} out of {team.placement_out_of})
      //     </div>
      //     <div style={{ fontSize: '14px' }}>
      //       {team.league} | {team.name}
      //     </div>
      //   </div>
      //   <div style={{ flex: '1', padding: '10px', borderLeft: '1px solid black' }}>
      //     <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>
      //       Last Matchup:
      //     </div>
      //     <div style={{ marginBottom: '5px' }}>
      //       Opponent: {team.last_matchup.opponent_team}
      //     </div>
      //     <div style={{ marginBottom: '5px' }}>
      //       Opponent Score: {team.last_matchup.opponent_score}
      //     </div>
      //     <div style={{ marginBottom: '5px' }}>
      //       You: {team.teamName}
      //     </div>
      //     <div>
      //       Your Score: {team.last_matchup.ally_score}
      //     </div>
      //   </div>
      //   <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      //     <img src={team.imageUrl} alt={team.name} className="relative inline-block h-12 w-12 !rounded-full object-cover object-center" style={{ maxWidth: '100%' }} />
      //   </div>
      // </div>
          <div>
            <div className="bg-white rounded-md m-5 p-5">
                <div className="grid grid-cols-12">
                    <div className="col-span-6">
                      <div className='flex justify-center items-center h-full pe-20'>
                    <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={team.imageUrl} alt={team.name} className="relative inline-block h-12 w-12 !rounded-full object-cover object-center" style={{ maxWidth: '100%' }} />
                    </div>
                        <div className="flex justify-center items-center h-full">
                            <span>
                                <h1 className='gap-x-5 flex items-center'><div className='font-bold text-2xl'>{team.teamName}</div> <div>{team.record} ({team.current_placement} out of {team.placement_out_of})</div></h1>
                                <p><Link to={"/league-standings/2"} className='cursor-pointer text-blue-400 font-bold'>{team.league}</Link>  | {team.name}</p>
                            </span>
                           
                        </div>
                    </div>
                    </div>
                    <div className="col-span-6">
                        <div className="text-center">
                            <h1 className='p-2 font-bold'>LAST MATCHUP</h1>
                            <div className='border border-black rounded-lg p-2'>
                                <div className='grid grid-cols-12 p-2'>
                                    <div className='col-span-6'>
                                        <h1 className='text-left'>{team.teamName}</h1>
                                    </div>
                                    <div className='col-span-6'>
                                        <p className='text-right text-green-700'>{team.last_matchup.ally_score}</p>
                                    </div>
                                    <div className='col-span-6'>
                                        <h1 className='text-left'>{team.last_matchup.opponent_team}</h1>
                                    </div>
                                    <div className='col-span-6'>
                                        <p className='text-right text-red-700'>{team.last_matchup.opponent_score}</p>
                                    </div>
                             
                                 
                                </div>
                            
                            </div>
                          
                       
                        </div>
                    </div>
                </div>
            </div>
          </div>
    );
  };
  
  
  
  // TeamPage component
  const TeamPage = ({ match }) => {
    const teamId = parseInt(match.params.id);
    const team = teams.find(team => team.id === teamId);
  
    if (!team) return <div>Team not found</div>;
  
    return (
      <div>
        <h2>{team.name}</h2>
        <p>{team.record}</p>
        <p>{team.league}</p>
        <p>{team.last_matchup.opponent_team} vs {team.last_matchup.ally_team}</p>
        <img src={team.imageUrl} alt={team.name} style={{ maxWidth: '100%' }} />
      </div>
    );
  };
  
  // App component
  const App = () => {
    return (
      <div>
        <h1 className="text-center font-bold text-2xl p-5">Select Team</h1>
        {teams.map((team, index) => (
          <Card key={index} team={team} className={"rounded-lg"} />
        ))}
      </div>
    );
  };
  
  export default App;
  