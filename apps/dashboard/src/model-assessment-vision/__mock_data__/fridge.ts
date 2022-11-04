// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatasetTaskType, IDataset } from "@responsible-ai/core-ui";

import { fridgeImages } from "./fridgeImages";

export const fridge: IDataset = {
  categorical_features: [],
  class_names: ["can", "carton", "milk_bottle", "water_bottle"],
  feature_names: ["mean_pixel_value"],
  features: [
    [95.31284825289677],
    [84.69935660795275],
    [96.82651920382118],
    [139.81288994028156],
    [118.74137849634106],
    [96.03234639705477],
    [116.1944440258964],
    [156.94601031637208],
    [138.63600484176374],
    [116.77090019638274],
    [104.20986333569394],
    [116.08712864325142],
    [97.7599067809805],
    [102.52772110637315],
    [79.23872406467069],
    [78.73751914857283],
    [75.8992330525713],
    [107.98595587164303],
    [115.18021104866375],
    [100.59847414126499],
    [82.81142636149492],
    [88.68177055866119],
    [100.34771096076865],
    [102.71283720322852],
    [116.43946539695933],
    [96.60582819774888],
    [95.60207532860207],
    [111.82308175247739],
    [94.76322168145815],
    [89.44031622141526],
    [74.21323247999759],
    [104.50651779749977],
    [105.64691990497285],
    [110.85784702236553],
    [100.75961748057519],
    [113.76419204323435],
    [109.15102485673101],
    [114.39268110155147],
    [108.32878689710247],
    [106.11869654095158],
    [81.28403071807776],
    [97.64177276859483],
    [91.13476074956931],
    [70.44286869478304],
    [81.33078990060321],
    [77.63631423247497],
    [75.88688354151913],
    [108.65089276296955],
    [130.8879654044932],
    [119.59721447908348],
    [152.05574356733518],
    [109.87165709865847],
    [110.36740850121295],
    [82.79173083008122],
    [94.12558349782272],
    [110.79903064273911],
    [124.7931281108583],
    [114.98461584823782],
    [104.79512408275197],
    [93.91704612231983],
    [95.86216844717003],
    [99.59804923129467],
    [89.33219722653327],
    [75.59860171470761],
    [104.68140993766983],
    [105.644306156172],
    [116.64628605582091],
    [105.68025775862502],
    [111.10920085785607],
    [121.85357080074937],
    [102.63033234388577],
    [85.63116408255107],
    [83.89496285804692],
    [124.50242339315221],
    [95.28945208713165],
    [97.20876439595983],
    [76.99963134288627],
    [80.8539143449807],
    [89.48208396743361],
    [93.05765114188276],
    [82.82937102274725],
    [102.87860934902386],
    [137.36997905585608],
    [139.65304142118825],
    [116.45327145519109],
    [24.462534090737865],
    [82.24885962400992],
    [101.50880608334464],
    [116.19573683708269],
    [109.43424392644938],
    [101.70703512287733],
    [116.01029326824074],
    [88.71978644004801],
    [84.29723908970824],
    [113.93166181988036],
    [109.22723843677329],
    [100.98208949226775],
    [84.5715561448712],
    [82.80138924465473],
    [107.8279084484759],
    [97.26840849619037],
    [111.17454558239285],
    [97.09293172811789],
    [119.7738092726807],
    [107.37994485211024],
    [98.976736430254],
    [136.69238728082732],
    [100.68018744255428],
    [95.20174986564608],
    [108.4939201711694],
    [113.95875962451218],
    [108.08554452262922],
    [100.69176448134364],
    [113.45939698946766],
    [109.1880322047604],
    [92.21307678012667],
    [91.18546667269376],
    [109.26651699388752],
    [76.73858092124098],
    [71.06574753517059],
    [73.74995102987931],
    [81.30849568811809],
    [115.89991110039628],
    [105.08086348134866],
    [118.20760819885385],
    [88.28068367311063],
    [88.5644421675431],
    [124.86965208612715],
    [96.44391037714527],
    [97.88054103193856],
    [85.75104394252163],
    [133.50404367632507],
    [130.90057006243063],
    [105.48499003018568]
  ],
  images: fridgeImages,
  predicted_y: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0,
    0, 3, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3
  ],
  target_column: "label",
  task_type: DatasetTaskType.ImageClassification,
  true_y: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3
  ]
};