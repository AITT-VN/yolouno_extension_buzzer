const BuzzerColorBlock = "#e63022";

Blockly.Blocks['uno_buzzer_init'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "uno_buzzer_init",
        "message0": "khởi tạo còi phát nhạc chân %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "pin",
            "options": digitalPins
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": BuzzerColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Blocks["uno_buzzer_music_play_built_in"] = {
  init: function () {
    this.jsonInit({
      colour: BuzzerColorBlock,
      nextStatement: null,
      tooltip: "Phát ra một bài nhạc có sẵn.",
      message0: "phát bài nhạc %1",
      previousStatement: null,
      args0: [
        {
          type: "field_dropdown",
          name: "melody",
          options: [
            ["DADADADUM", "DADADADUM"],
            ["ENTERTAINER", "ENTERTAINER"],
            ["PRELUDE", "PRELUDE"],
            ["ODE", "ODE"],
            ["NYAN", "NYAN"],
            ["RINGTONE", "RINGTONE"],
            ["BIRTHDAY", "BIRTHDAY"],
            ["WEDDING", "WEDDING"],
            ["PYTHON", "PYTHON"],
            ["CHASE", "CHASE"],
            ["JUMP_UP", "JUMP_UP"],
            ["JUMP_DOWN", "JUMP_DOWN"],
            ["POWER_UP", "POWER_UP"],
            ["POWER_DOWN", "POWER_DOWN"],
          ],
        },
      ],
      helpUrl: "",
    });
  },
};

Blockly.Blocks["uno_buzzer_music_play_built_in_until_done"] = {
  init: function () {
    this.jsonInit({
      colour: BuzzerColorBlock,
      nextStatement: null,
      tooltip: "Phát ra một bài nhạc có sẵn. Chờ đến khi hết bài",
      message0: "phát bài nhạc %1 chờ kết thúc",
      previousStatement: null,
      args0: [
        {
          type: "field_dropdown",
          name: "melody",
          options: [
            ["DADADADUM", "DADADADUM"],
            ["ENTERTAINER", "ENTERTAINER"],
            ["PRELUDE", "PRELUDE"],
            ["ODE", "ODE"],
            ["NYAN", "NYAN"],
            ["RINGTONE", "RINGTONE"],
            ["BIRTHDAY", "BIRTHDAY"],
            ["WEDDING", "WEDDING"],
            ["PYTHON", "PYTHON"],
            ["CHASE", "CHASE"],
            ["JUMP_UP", "JUMP_UP"],
            ["JUMP_DOWN", "JUMP_DOWN"],
            ["POWER_UP", "POWER_UP"],
            ["POWER_DOWN", "POWER_DOWN"],
          ],
        },
      ],
      helpUrl: "",
    });
  },
};

Blockly.Blocks["uno_buzzer_music_pitch"] = {
  init: function () {
    this.jsonInit({
      inputsInline: true,
      colour: BuzzerColorBlock,
      nextStatement: null,
      tooltip: "Phát ra âm thanh với tần số được chọn trong khoảng thời gian (tính bằng milli giây).",
      message0: "phát âm thanh tần số %1 trong %2 milli giây",
      previousStatement: null,
      args0: [
        {
          "min": 0,
          "type": "input_value",
          "check": "Number",
          "value": 440,
          "name": "pitch",
        },
        {
          "min": 0,
          "type": "input_value",
          "check": "Number",
          "value": 1000,
          "name": "duration",
        },
      ],
      helpUrl: "",
    });
  },
};

Blockly.Blocks["uno_buzzer_music_note"] = {
  /**
   * Block for pitch.
   * @this Blockly.Block
   */
  init: function () {
    this.appendDummyInput()
      .appendField(new CustomFields.FieldPitch('7'), 'PITCH');
    this.setOutput(true, "Number");
    this.setColour(BuzzerColorBlock);
    this.setTooltip("");
  },
};

Blockly.Blocks["uno_buzzer_music_play_note"] = {
  /**
   * Block for playing note.
   * @this Blockly.Block
   */
  init: function () {
    var options = [
      [
        {
          src:
            "static/blocks/block_images/note1.png",
          width: 9,
          height: 19,
          alt: "whole",
        },
        "4",
      ],
      [
        {
          src:
            "static/blocks/block_images/note0.5.png",
          width: 9,
          height: 19,
          alt: "half",
        },
        "2",
      ],
      [
        {
          src:
            "static/blocks/block_images/note0.25.png",
          width: 9,
          height: 19,
          alt: "quarter",
        },
        "1",
      ],
      [
        {
          src:
            "static/blocks/block_images/note0.125.png",
          width: 9,
          height: 19,
          alt: "eighth",
        },
        "0.5",
      ],
      [
        {
          src:
            "static/blocks/block_images/note0.0625.png",
          width: 9,
          height: 19,
          alt: "sixteenth",
        },
        "0.25",
      ],
    ];

    this.jsonInit({
      message0: "phát nốt nhạc %2 với độ dài %1",
      args0: [
        {
          "type": "field_dropdown",
          "name": "DURATION",
          "options": options,
        },
        {
          "type": "input_value",
          "name": "PITCH",
          "check": "Number",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: BuzzerColorBlock,
      tooltip: "Phát ra một nốt nhạc.",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["uno_buzzer_music_rest"] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "tạm dừng %1",
      args0: [
        {
          type: "field_dropdown",
          name: "DURATION",
          options: [
            [
              {
                src:
                  "static/blocks/block_images/rest1.png",
                width: 10,
                height: 20,
                alt: "whole",
              },
              "4",
            ],
            [
              {
                src:
                  "static/blocks/block_images/rest0.5.png",
                width: 10,
                height: 20,
                alt: "half",
              },
              "2",
            ],
            [
              {
                src:
                  "static/blocks/block_images/rest0.25.png",
                width: 10,
                height: 20,
                alt: "quarter",
              },
              "1",
            ],
            [
              {
                src:
                  "static/blocks/block_images/rest0.125.png",
                width: 10,
                height: 20,
                alt: "eighth",
              },
              "0.5",
            ],
            [
              {
                src:
                  "static/blocks/block_images/rest0.0625.png",
                width: 10,
                height: 20,
                alt: "sixteenth",
              },
              "0.25",
            ],
          ],
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: BuzzerColorBlock,
      tooltip: "Tạm dừng trong một khoảng thời gian",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["uno_buzzer_music_reset"] = {
  init: function () {
    this.jsonInit({
      colour: BuzzerColorBlock,
      nextStatement: null,
      tooltip: "Trả về giá trị mặc định cho chức năng phát nhạc (tempo, octave và quãng).",
      message0: "trả về giá trị mặc định cho phát nhạc",
      previousStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["uno_buzzer_music_stop"] = {
  init: function () {
    this.jsonInit({
      args0: [
      ],
      colour: BuzzerColorBlock,
      nextStatement: null,
      tooltip: "Dừng phát nhạc.",
      message0: "dừng phát nhạc",
      previousStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["uno_buzzer_music_set_tempo"] = {
  init: function () {
    this.jsonInit({
      inputsInline: true,
      colour: BuzzerColorBlock,
      nextStatement: null,
      tooltip: "Chỉnh tốc độ (tempo) của phát nhạc. Chọn số tick cho một nhịp (beat), mỗi nhịp sẽ được phát một số lần nhất định trong một phút (số nhịp trong 1 phút minute hay BPM).",
      message0: "chỉnh tốc độ phát nhạc: 1 nhịp là %1 tick, 1 phút là %2 nhịp",
      previousStatement: null,
      args0: [
        { type: "input_value", name: "ticks", check: "Number" },
        { type: "input_value", name: "bpm", check: "Number" },
      ],
      helpUrl: "",
    });
  },
};

Blockly.Blocks["uno_buzzer_music_get_tempo"] = {
  init: function () {
    this.jsonInit({
      colour: BuzzerColorBlock,
      tooltip: "Lấy tốc độ phát nhạc (tempo) hiện tại và trả về 2 số: số tick cho một nhịp (beat), và số nhịp trong một phút (BPM).",
      message0: "lấy tốc độ phát nhạc hiện tại",
      output: "Array",
      helpUrl: "",
    });
  },
};

// Python

Blockly.Python['uno_buzzer_init'] = function (block) {
  var pin = block.getFieldValue('pin');
  Blockly.Python.definitions_['import_buzzer'] = 'from buzzer import *';
  Blockly.Python.definitions_['init_buzzer_' + pin] = 'buzzer = Buzzer_Music(' + pin + '_PIN)';
  // TODO: Assemble Python into code variable.
  var code = "";
  return code;
};

Blockly.Python['uno_buzzer_music_play_built_in'] = function (block) {
  var dropdown_melody = block.getFieldValue('melody');
  var code = 'buzzer.play(' + dropdown_melody + ', wait=False)\n';
  return code;
};

Blockly.Python['uno_buzzer_music_play_built_in_until_done'] = function (block) {
  var dropdown_melody = block.getFieldValue('melody');
  var code = 'buzzer.play(' + dropdown_melody + ', wait=True)\n';
  return code;
};

Blockly.Python['uno_buzzer_music_pitch'] = function (block) {
  var number_pitch = Blockly.Python.valueToCode(block, 'pitch', Blockly.Python.ORDER_ATOMIC);
  var number_duration = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC);
  var code = 'buzzer.pitch(' + number_pitch + ', ' + number_duration + ')\n';
  return code;
};

Blockly.Python['uno_buzzer_music_note'] = function (block) {
  return [CustomFields.FieldPitch.NOTES[parseInt(block.getFieldValue('PITCH'))], Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['uno_buzzer_music_play_note'] = function (block) {
  //var dropdown_note = Blockly.FieldPitch.NOTES[parseInt(Blockly.Python.valueToCode(block, 'PITCH',
  //  Blockly.Python.ORDER_ATOMIC) || '7')];
  var dropdown_note = Blockly.Python.valueToCode(block, 'PITCH', Blockly.Python.ORDER_ATOMIC) || 'C5';
  var dropdown_beat = block.getFieldValue('DURATION');
  var checkbox_wait = block.getFieldValue('wait') == 'TRUE' ? 'True' : 'False';
  var code = "buzzer.play(['" + dropdown_note + ":" + dropdown_beat + "'], wait=True)\n";
  return code;
};

Blockly.Python['uno_buzzer_music_rest'] = function (block) {
  var code = "buzzer.play(['R:" + block.getFieldValue('DURATION') + "'], wait=True)\n";
  return code;
};

Blockly.Python['uno_buzzer_music_reset'] = function (block) {
  var code = 'buzzer.reset()\n';
  return code;
};

Blockly.Python['uno_buzzer_music_stop'] = function (block) {
  var code = 'buzzer.stop()\n';
  return code;
};

Blockly.Python['uno_buzzer_music_set_tempo'] = function (block) {
  var value_ticks = Blockly.Python.valueToCode(block, 'ticks', Blockly.Python.ORDER_ATOMIC);
  var value_bpm = Blockly.Python.valueToCode(block, 'bpm', Blockly.Python.ORDER_ATOMIC);
  var code = 'buzzer.set_tempo(' + value_ticks + ', ' + value_bpm + ')\n';
  return code;
};

Blockly.Python['uno_buzzer_music_get_tempo'] = function (block) {
  var code = 'buzzer.get_tempo()';
  return [code, Blockly.Python.ORDER_MEMBER];
};