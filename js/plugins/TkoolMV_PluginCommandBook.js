=============================================================================
 TkoolMV_PluginCommandBook.js
 httpsgithub.comAlecYawataTkoolMV_PluginCommandBook
=============================================================================

 Copyright (c) 2015 Alec
 This software is released under the MIT License.
 httpopensource.orglicensesmit-license.php

=============================================================================

  @plugindesc �v���O�C���R�}���h�W
  @author �L�u�̊F����
 
  @param ���䕶���̊g��
  @desc ���̃v���O�C���Ŏg����p�����[�^�̐��䕶����
  �ʏ�̃��b�Z�[�W�ȂǂŎg�p�ł���悤�ɂ��邩(�͂�������)
  Default �͂�
  @default �͂�
 
  @param �X�N���v�g�ɐ��䕶���K�p
  @desc �X�N���v�g���s���ɐ��䕶�����g�p�ł���悤�ɂ��邩(�͂�������)
  Default ������
  @default ������
 
  @help
   Copyright (c) 2015 Alec
   This software is released under the MIT License.
   httpopensource.orglicensesmit-license.php
 
  ���̃v���O�C���͗L�u�ɂ��v���O�C���R�}���h�W�ł��B
  ���p���p�A�N����̂���Q�[���ւ̎g�p�A���ς��\�ł��B
  �N���W�b�g�͕s�v�ł��B
 
  ���g����
  �C�x���g�̃R�}���h�ǉ�����v���O�C���R�}���h��I�����A
  �ȉ��̃v���O�C���R�}���h����D���ȃ��m��I��œ��͂��ĉ������B
 
  ���p�����[�^�ɂ���
  �v���O�C���R�}���h�̉E�ɋ󔒂����ăp�����[�^��ǋL���邱�Ƃ��ł��܂��B
  �p�����[�^�͐����A�p�����A���{��A�L���ȂǈȊO�ɂ��ȉ��̂悤�Ȑ��䕶�����g���܂��B
  �i�e���������ɂ͑S�p�������g���܂��j
  V[n] �ϐ�n�Ԗڂ̒l�ɒu���������܂�
  N[n] �A�N�^�[n�Ԃ̖��O�ɒu���������܂�
  P[n] �p�[�e�B�����o�[n�Ԃ̒l�ɒu���������܂�
  G �@�@�ʉݒP�ʂɒu���������܂�
  In[n] �A�C�e��n�Ԃ̖��O�ɒu���������܂�
  Ip[n] �A�C�e��n�Ԃ̉��i�ɒu���������܂�
  Sn[n] �X�L��n�Ԃ̖��O�ɒu���������܂�
  Js[X]Js X��JavaScript�Ƃ��ĕ]�������l�ɒu���������܂�
  
  ���̑��g�p�\�Ȑ��䕶����AJs[X]Js�Ŏg����X�N���v�g�ɂ��ẮA���L�V�[�g���Q�Ƃ��Ă��������B
  httpsdocs.google.comspreadsheetsd1rOIzDuhLC6IqJPEFciYOmXWL_O7X9-hMValMs7DpWCk
  
  ���v���O�C���R�}���h
 
  ===========================================================================
  �u���O�̕ύX�v
   ��l���̖��O��ύX����
   ����� Alec
 
   �g�p��
   ���O�̕ύX 1 ���C�A���@�@�i�A�N�^�[0001�̖��O�����C�A���ɕύX
   ���O�̕ύX 2 V[1]�@�@�@�i�A�N�^�[0002�̖��O��ϐ�0001�̓��e�ɕύX
 
  ===========================================================================
  �Ăяo�����A�C�e���擾
   �R�����C�x���g���Ăяo�����A�C�e����ID��ϐ��ɓ����
   ����� Alec
 
   �g�p��
   �Ăяo�����A�C�e���擾 1�@�@�i�ϐ�0001�ɃR�����C�x���g���Ăяo�����A�C�e��ID������
 
  ===========================================================================
  �Ăяo�����X�L���擾
   �R�����C�x���g���Ăяo�����X�L����ID��ϐ��ɓ����
   ����� Alec
 
   �g�p��
   �Ăяo�����X�L���擾 1�@�@�i�ϐ�0001�ɃR�����C�x���g���Ăяo�����X�L��ID������
 
  ===========================================================================
  ���x���̕ύX
   �A�N�^�[�̃��x����ύX���܂��B�����ł͂Ȃ��ύX��̃��x�����w��ł��܂��B
   ����� Alec
 
   �p�����[�^
   �@�A�N�^�[��ID�i����0�Ȃ�S���j
     �ύX��̃��x��
     ���x���A�b�v�����b�Z�[�W�ŕ\�����邩�ǂ����i�\���E��\���j
 
   �g�p��
   ���x���̕ύX 1 50 �\���@�@�i�A�N�^�[0001�̃��x����50�ɕύX
   ���x���̕ύX 0 10 ��\���@�i���ԑS���̃��x����10�ɕύX�A���x���A�b�v�͕\�����Ȃ�
 
  ===========================================================================
  �o�C�u���[�V����(EnglishVibration)
   ���s����Android�[����U�������܂��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�U������t���[����(160�b�P��)
     �U������������܂ŃE�F�C�g(�E�F�C�g���� or �E�F�C�g�Ȃ�)
     �@�f�t�H���g�́u�E�F�C�g�Ȃ��v
 
   �g�p��
   �o�C�u���[�V���� 60 �E�F�C�g����
   Vibration 120
  ===========================================================================
  �w��ʒu�̒ʍs���擾(EnglishGet_Location_Pass)
   �w�肵�����W�̃}�b�v�ʍs�����擾���āA�ϐ��Ɋi�[���܂��B
   ����� �g���A�R���^��
 
   �ȉ��̖@���ɏ]���Ċi�[����܂��B
   ������֒ʍs�\�F��̈ʂ� 1�A������֒ʍs�s�\�F��̈ʂ� 0
   �E�����֒ʍs�\�F�S�̈ʂ� 1�A�E�����֒ʍs�s�\�F�S�̈ʂ� 0
   �������֒ʍs�\�F�\�̈ʂ� 1�A�������֒ʍs�s�\�F�\�̈ʂ� 0
   �������֒ʍs�\�F��̈ʂ� 1�A�������֒ʍs�s�\�F��̈ʂ� 0
 
   �p�����[�^
   �@���ʂ��i�[����ϐ��̔ԍ�
     X���W
     Y���W
 
   �g�p��
   �w��ʒu�̒ʍs���擾 1 17 13
   Get_Location_Pass 2 V[1] V[2]
  ===========================================================================
  �ϐ��̏�����(EnglishInit_Variables)
   �S�Ă̕ϐ������������܂��B�i��O�w��\�j
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�������������Ȃ��ϐ��ԍ��i���p�X�y�[�X�ŋ�؂��ĕ����w��\�j
 
   �g�p��
   �ϐ��̏�����
   Init_Variables 1 2 V[3]
  ===========================================================================
  �X�C�b�`�̏�����(EnglishInit_Switches)
   �S�ẴX�C�b�`�����������܂��B�i��O�w��\�j
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�������������Ȃ��X�C�b�`�ԍ��i���p�X�y�[�X�ŋ�؂��ĕ����w��\�j
 
   �g�p��
   �X�C�b�`�̏�����
   Init_Switches 1 2 V[3]
  ===========================================================================
  �Z���t�X�C�b�`�̏�����(EnglishInit_Self_Switch)
   �S�ẴZ���t�X�C�b�`�����������܂��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�Ȃ�
 
   �g�p��
   �Z���t�X�C�b�`�̏�����
   Init_Self_Switch
  ===========================================================================
  �Z���t�X�C�b�`�̉��u����(EnglishRemote_Control_Self_Switch)
   �}�b�vID�A�C�x���gID�A��ʁiA, B, C, D�j���w�肵�ăZ���t�X�C�b�`�𑀍삵�܂��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�}�b�vID
   �@�C�x���gID
   �@��ʁiA, B, C, D�j
   �@�ݒ�l�iON or OFF�j
 
   �g�p��
   �Z���t�X�C�b�`�̉��u���� 1 3 A ON
   Remote_Control_Self_Switch 1 3 D OFF
  ===========================================================================
  �s�N�`���̓ǂݍ���(EnglishLoad_Picture)
   �w�肵���t�@�C�����̃s�N�`�������O�ɓǂݍ���ŃL���b�V���ɕۑ����܂��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�t�@�C�����i�g���q�͎w�肵�Ȃ��ł��������j
 
   �g�p��
   �s�N�`���̓ǂݍ��� filename
   Load_Picture filename
  ===========================================================================
  �퓬�A�j���̓ǂݍ���(EnglishLoad_Animation)
   �w�肵���t�@�C�����̐퓬�A�j�������O�ɓǂݍ���ŃL���b�V���ɕۑ����܂��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�t�@�C�����i�g���q�͎w�肵�Ȃ��ł��������j
   �@�F���i0-360�j
 
   �g�p��
   �퓬�A�j���̓ǂݍ��� filename
   Load_Animation filename
  ===========================================================================
  �V���b�g�_�E��(EnglishShutdown)
   �Q�[���E�B���h�E����ċ����I�����܂��B
   ���̑���̓u���E�U���s�A�X�}�z���s�ł͖����ł��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�Ȃ�
 
   �g�p��
   �V���b�g�_�E��
   Shutdown
  ===========================================================================
  �E�F�u�T�C�g�N��(EnglishStartup_Website)
   �ʃE�B���h�E�Ŏw�肳�ꂽURL�̃E�F�u�T�C�g���N�����܂��B
   ���̑���̓u���E�U���s�A�X�}�z���s�ł͖����ł��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�\���������T�C�g��URL
   �@�E�B���h�E��X���W�i�w�肵�Ȃ������ꍇ��0�j
   �@�E�B���h�E��Y���W�i�w�肵�Ȃ������ꍇ��0�j
   �@�E�B���h�E�̉����i�w�肵�Ȃ������ꍇ�̓Q�[����ʂƓ����T�C�Y�j
   �@�E�B���h�E�̍����i�w�肵�Ȃ������ꍇ�̓Q�[����ʂƓ����T�C�Y�j
 
   �g�p��
   �E�F�u�T�C�g�N�� httpswww.google.co.jp
   Startup_Website httpswww.google.co.jp
  ===========================================================================
  �ϐ��̑���(EnglishControlVariable)
  �w��̕ϐ��̒l�𑀍�(����A���Z�A���Z�A��Z�A���Z�A��])���܂��B
  �ϐ��̎w��ɂ��āA�C�x���g�G�f�B�^�̃R�}���h�Ɠ���#0001�Ȃǂ��g�p�ł��܂��B
  �v���O�C���R�}���h��[�ϐ��̑���]��������[ControlVariable]��[ConVar]���L�q���Ďg�p���܂��B
  
  �p�����[�^�F
   ����1�F���삷��ϐ�
   ����2�F���삷����e   [����F=  ���Z+=  ���Z�F-=  ��Z�F=  ���Z�F=  ��]�F%=]
                                                   or
                         [����Fset  ���Zadd  ���Z�Fsub  ��Z�Fmult  ���Z�Fdiv  ��]�Fmod]
   ����3�F����p�̒l
   ����4�F�l�̌^(�ȗ���) [�����D��(�ȗ��l)�F0  �����D��1]
 
  �g�p��F
    �ϐ��̑��� #0001 += V[2]         �ϐ�1�ɕϐ�2�̒l�����Z
    �ϐ��̑��� V[2] = V[3]          �ϐ�2�̒l�Ɠ��ԍ��̕ϐ��ɕϐ�3�̒l����
    �ϐ��̑��� 1 mod V[2]            �ϐ�1��ϐ�2�̒l�ŏ��Z�����]�����
    �ϐ��̑��� 1 = In[V[2]]         �ϐ�1�ɕϐ�2�̃A�C�e���ԍ��̖��O����
    �ϐ��̑��� #0001 = 10 1           �ϐ�1��'10'(����)����
    �ϐ��̑��� 5 = Js[$dataMap.note] �ϐ�5�Ɍʃ}�b�v�̃�������
    ControlVariable 1 += 2            �ϐ�1��2�����Z
    ConVar 1 mult V[5]               �ϐ�1��ϐ�5�̒l�ŏ�Z
 
  ===========================================================================
  �^�b�`���W�̎擾(EnglishGet_Touch_Info)
   �^�b�`�ʒu��X���W��Y���W���w�肳�ꂽ�ϐ��Ɋi�[���܂��B
   ��ʏ�̎����W�ƃ}�b�v��̃^�C�����W�̓��ނ��擾�ł��܂��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@X���W���i�[�����ϐ��̔ԍ��i1-5000�j
   �@Y���W���i�[�����ϐ��̔ԍ��i1-5000�j
   �@�擾�^�C�v�i��ʍ��W or �}�b�v���W�j���w�肵�Ȃ��ꍇ�͉�ʍ��W
 
   �g�p��
   �^�b�`���W�̎擾 1 2
   Get_Touch_Info V[1] V[2] �}�b�v���W
  ===========================================================================
  �}�b�v�^�b�`�֎~�̕ύX(EnglishChange_Map_Touch)
   �}�b�v�^�b�`�ɂ��v���C���[�̈ړ��֎~��ύX���܂��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�ݒ�l�i�֎~ or ���j
 
   �g�p��
   �}�b�v�^�b�`�֎~�̕ύX �֎~
   Change_Map_Touch ����
  ===========================================================================
  �}�b�v�^�b�`�ړ�������(EnglishGet_Map_Touch_Moving)
   �}�b�v�^�b�`�ɂ��v���C���[�̈ړ������ǂ�����
   �w�肳�ꂽ�X�C�b�`�Ɋi�[���܂��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@���ʂ��i�[�����X�C�b�`�̔ԍ��i1-5000�j
 
   �g�p��
   �}�b�v�^�b�`�ړ������� 1
   Get_Map_Touch_Moving V[1]
  ===========================================================================
  �}�b�v�^�b�`�ړ�(EnglishMap_Touch_Move)
   �}�b�v���^�b�`�����̂Ɠ����v�̂Ŏw��ʒu�Ƀv���C���[���ړ����܂��B
   ��Q����L�[���͂ɂ��ړ��͒��f����܂��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�ړ���X���W
   �@�ړ���Y���W
 
   �g�p��
   �}�b�v�^�b�`�ړ� 17 13
   Map_Touch_Move V[1] V[2]
  ===========================================================================
  �s�N�`���̈ړ�(EnglishMove_Picture)
   �C�x���g�R�}���h�u�s�N�`���̈ړ��v�Ɠ�����������܂��B
   ���ꂼ��̃p�����[�^�𐧌䕶���ŕϐ��w��ł���̂������Ō��Z�������\�ł��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�s�N�`���ԍ��i1-100�j
   �@���_�i���� or �����j
   �@�ړ���X���W
   �@�ړ���Y���W
   �@X�����g�嗦�i�}�C�i�X�l�ŉ摜���]�j
   �@Y�����g�嗦�i�}�C�i�X�l�ŉ摜���]�j
   �@�s�����x�i0-255�j
   �@�������@�i�ʏ� or ���Z or ���Z�j
   �@�ړ��t���[����
   �@�ړ������܂ŃE�F�C�g�i�w�肷��ꍇ�u�E�F�C�g����v�j
 
   �g�p��
   �s�N�`���̈ړ� 1 ���� 300 200 200 200 128 ���Z 240 �E�F�C�g����
   Move_Picture V[1] ���� V[2] V[3] V[4] V[5] V[6] ���Z V[7]
  ===========================================================================
  ���l���͔͈͂̐ݒ�(EnglishSet_Input_Num_Range)
   �C�x���g�R�}���h�u���l���͂̏����v�œ��͉\�Ȓl�̍ŏ��l�ƍő�l��ݒ肵�܂��B
   ���͉\�����ƕ����čl������܂��B
   ���̐ݒ�͉����Y��h�~�̂��߁A���l���͂̏������I�������_�ŏ���������܂��B
 
   ����� �g���A�R���^��
 
   �p�����[�^
   �@���͉\�ŏ��l�i0-99999999�j
   �@���͉\�ő�l�i0-99999999�j
 
   �g�p��
   ���l���͔͈͂̐ݒ� 0 500
   Set_Input_Num_Range V[1] V[2]
  ===========================================================================
  ���l���̓E�B���h�E�̐ݒ�(EnglishSet_Num_Input_Window)
   �C�x���g�R�}���h�u���l���͂̏����v�ŕ\�������E�B���h�E�̔w�i�ƈʒu��ݒ肵�܂��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�w�i�i�E�B���h�E or �Â����� or �����j
   �@�ʒu�i�� or �� or �E�j
 
   �g�p��
   ���l���̓E�B���h�E�̐ݒ� �E�B���h�E ��
   Set_Num_Input_Window �Â����� ��
  ===========================================================================
  ���l���͗L�����̐ݒ�(EnglishSet_Num_Input_Valid_Digit)
   �C�x���g�R�}���h�u���l���͂̏����v�œ��͉\�ȗL������ݒ肵�܂��B
   �L������菬�������͕ύX�ł��Ȃ��Ȃ�܂��B(1���ڂ�0�ŌŒ肵�����ꍇ�ȂǂɎg�p)
   1���w�肷��ƒʏ�ʂ�A�S�Ă̌�����͂ł��܂��B
   ���̐ݒ�͉����Y��h�~�̂��߁A���l���͂̏������I�������_�ŏ���������܂��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�L�����i1-8�j
 
   �g�p��
   ���l���͗L�����̐ݒ� 2
   Set_Num_Input_Valid_Digit v[1]
  ===========================================================================
  �s�N�`���̗L������(EnglishGet_Picture_Valid)
   �w�肳�ꂽ�ԍ��̃s�N�`�������݁A�g���Ă��邩�𔻒肵�Č��ʂ��X�C�b�`�Ɋi�[���܂��B
   �u�s�N�`���̕\���v�Ŏg�p��ԂɂȂ�A�u�s�N�`���̏����v�Ŕ�g�p��ԂɂȂ�܂��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@���ʂ��i�[�����X�C�b�`�̔ԍ��i1-5000�j
   �@�s�N�`���ԍ��i1-100�j
 
   �g�p��
   �s�N�`���̗L������ 2 1
   Get_Picture_Valid v[1] v[2]
  ===========================================================================
  �s�N�`���̕\���D��x�ݒ�(EnglishSet_Picture_Priority)
   �w�肵���ԍ��̃s�N�`���̕\���D��x��ݒ肵�܂��B�\���D��x�̍����s�N�`���ق�
   ��ʂ̑O�ʂɕ\������܂��B���̐ݒ�̓s�N�`���ԍ������D�悳��܂��B
   �f�t�H���g�l��100�ł��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�s�N�`���ԍ��i1-100�j
   �@�\���D��x�̒l�i�f�t�H���g100�j
 
   �g�p��
   �s�N�`���̕\���D��x�ݒ� 1 101
   Set_Picture_Priority v[1] v[2]
  ===========================================================================
  �s�N�`���̕\���D��x�ݒ�(EnglishSet_Picture_Priority)
   �w�肵���ԍ��̃s�N�`���̕\���D��x��ݒ肵�܂��B�\���D��x�̍����s�N�`���ق�
   ��ʂ̑O�ʂɕ\������܂��B���̐ݒ�̓s�N�`���ԍ������D�悳��܂��B
   �f�t�H���g�l��100�ł��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�s�N�`���ԍ��i1-100�j
   �@�\���D��x�̒l�i�f�t�H���g100�j
 
   �g�p��
   �s�N�`���̕\���D��x�ݒ� 1 101
   Set_Picture_Priority v[1] v[2]
  ===========================================================================
  �s�N�`���̃g���~���O(EnglishTrimming_Picture)
   �w�肵����`�iX���W�AY���W�A�����A�����j�Ńs�N�`����؂�o���܂��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�s�N�`���ԍ��i1-100�j
   �@X���W
   �@Y���W
   �@����
   �@����
 
   �g�p��
   �s�N�`���̃g���~���O 1 0 0 320 240
   Trimming_Picture v[1] v[2] v[3] v[4] v[5]
  ===========================================================================
  �s�N�`���̉�]�p�ݒ�(EnglishAngle_Picture)
   �w�肵���p�x�Ŏ��v���Ƀs�N�`������]�����܂��B
   �u�s�N�`���̉�]�v�Ƃ͈قȂ��]��������Ԃ̂܂ܕۂ���܂��B
   ����� �g���A�R���^��
 
   �p�����[�^
   �@�s�N�`���ԍ��i1-100�j
   �@��]�p�i0-360�j
 
   �g�p��
   �s�N�`���̉�]�p�ݒ� 1 90
   Trimming_Picture v[1] v[2]
   ===========================================================================
  �����̘A��(English�FConcatenStrings)
  ������A�����A�w��̕ϐ��ɑ�����܂��B
  �ϐ��̎w��ɂ��āA�C�x���g�G�f�B�^�̃R�}���h�Ɠ���#0001�Ȃǂ��g�p�ł��܂��B
  �������[V]��JS[X]JS�Ȃǂ̐��䕶�����g�p�\�ł��B
  �v���O�C���R�}���h��[�����̘A��]��������[ConcatenStrings]��[CatStr]���L�q���Ďg�p���܂��B
  
  �p�����[�^�F
   ����1�F���ʂ�������ϐ�
   ����2�F�A�����镶��1
   ����3�F�A�����镶��2
   ����4�F���ʂ����l�Ƃ��ĕ]���ł���ꍇ(�ȗ���)
          [0�����Ƃ��ĕ]��(�ȗ��l)  1�F���l�Ƃ��ĕ]��]
  �g�p��
   �����̘A�� 1 N[1] �͓V�ˁI �n�����h�͓V�ˁI
   �����̘A�� #0001 JS[$dataMapInfos[1].name]JS ���Y�� ���s���Y��
   ConcatenStrings 1 TEST OK TESTOK
   CatStr 1 2 1 1  21(���l)
  ===========================================================================
  �����̒u��(English�FReplaceStrings)
  ������u�����A�w��̕ϐ��ɑ�����܂��B
  �ϐ��̎w��ɂ��āA�C�x���g�G�f�B�^�̃R�}���h�Ɠ���#0001�Ȃǂ��g�p�ł��܂��B
  �������[V]��JS[X]JS�Ȃǂ̐��䕶�����g�p�\�ł��B
  ���ꕶ���ƒu�������邱�Ƃɂ��A�w�蕶���̍폜���\�ł��B
  �v���O�C���R�}���h��[�����̒u��]��������[ReplaceStrings]��[RepStr]���L�q���Ďg�p���܂��B
  
  �p�����[�^�F
   ����1�F���ʂ�������ϐ�
   ����2�F�u���Ώۂ̕�����
   ����3�F�u���O����
   ����4�F�u���㕶��
   ����5�F�u�����@(�ȗ���) [�O�� ��� �S��(�ȗ��l)]
                                  or
                           [front back all(�ȗ��l)]
  �g�p��
   ������̒u�� 1 �n�����h������������n�����h �n �g �S�� �g�����h������������g�����h
   ������̒u�� 1 V[1] �n�����h  �S�� �ϐ�1�̕����񂩂�n�����h����菜��
   ReplaceStrings 1 �n�����h�ƃn�����h���������� �n �g Front �g�����h�ƃn�����h����������
   RepStr 1 �n�����h�ƃn�����h���������� �n�����h �s���[�[ Back �n�����h�Ƃs���[�[����������
  ===========================================================================
  �����̐؎�(English�FCutString)
  ������؂����Ďw��̕ϐ��ɑ�����܂��B
  �ϐ��̎w��ɂ��āA�C�x���g�G�f�B�^�̃R�}���h�Ɠ���#0001�Ȃǂ��g�p�ł��܂��B
  �������[V]��JS[X]JS�Ȃǂ̐��䕶�����g�p�\�ł��B
  �v���O�C���R�}���h��[�����̐؎�]��������[CutStrings]��[CutStr]���L�q���Ďg�p���܂��B
  
  �p�����[�^�F
   ����1�F���ʂ�������ϐ�
   ����2�F�Ώۂ̕�����
   ����3�F�J�n�ʒu
   ����4�F�I���ʒu(End �� �Ō� �̎w��ōŌ�܂Ő؂���)
   ����5�F�J�n����(�ȗ���)[�O��(�ȗ��l)  ���]
                                  or
                          [front(�ȗ��l) back]
  �g�p��
   �����̐؎� 1 JS[$dataMap.note]JS 1 10 �O��
   �����̐؎� 1 JS[$dataMap.note]JS 10 �Ō� ���
   CutStrings 1 [V] 2 end back
   CutStr 1 [V] 2 
  ===========================================================================
  ������v�J�E���g(English�FCountMatchString)
  ��������œ���̕����Ɉ�v���������J�E���g���w��̕ϐ��ɑ�����܂��B
  �ϐ��̎w��ɂ��āA�C�x���g�G�f�B�^�̃R�}���h�Ɠ���#0001�Ȃǂ��g�p�ł��܂��B
  �������[V]��JS[X]JS�Ȃǂ̐��䕶�����g�p�\�ł��B
  �v���O�C���R�}���h��[������v�J�E���g]��������[CountMatchString]��[CntStr]���L�q���Ďg�p���܂��B
  
  �p�����[�^�F
   ����1�F���ʂ�������ϐ�
   ����2�F�Ώۂ̕�����
   ����3�F�������镶��
   ����4�F��r���@[0��v�������v�������������r(�ȗ��l) 11��������r]
  �g�p��
   ������v�J�E���g 1 ���������� ���� 0 2������v
   ������v�J�E���g 1 ���������� ���� 1 4������v
   CountMatchString 1 [V] OK
   CntStr 1 N[1] �g�����h 0
  ===========================================================================
  �����̌���(English�FCountMatchString)
  ��������œ���̕������������A�ŏ��Ɉ�v�����ʒu���w��̕ϐ��ɑ�����܂��B
  �ϐ��̎w��ɂ��āA�C�x���g�G�f�B�^�̃R�}���h�Ɠ���#0001�Ȃǂ��g�p�ł��܂��B
  �������[V]��JS[X]JS�Ȃǂ̐��䕶�����g�p�\�ł��B
  �v���O�C���R�}���h��[�����̌���]��������[SearchString]��[SchStr]���L�q���Ďg�p���܂��B
  
  �p�����[�^�F
   ����1�F���ʂ�������ϐ�
   ����2�F�Ώۂ̕�����
   ����3�F�������镶��
   ����4�F�J�n����(�ȗ���)[�O��(�ȗ��l)  ���]
                                  or
                          [front(�ȗ��l) back]
  �g�p��
   �����̒T�� 1 ���������� ���� �O��
   SearchString 1 [V] test back
   SchStr 1 N[1] �g�����h
  ===========================================================================
  �������J�E���g(English�FCountStringlength)
  ���������J�E���g���w��̕ϐ��ɑ�����܂��B
  �ϐ��̎w��ɂ��āA�C�x���g�G�f�B�^�̃R�}���h�Ɠ���#0001�Ȃǂ��g�p�ł��܂��B
  �������[V]��JS[X]JS�Ȃǂ̐��䕶�����g�p�\�ł��B
  �v���O�C���R�}���h��[�������J�E���g]��������[CountStringlength]��[CntLen]���L�q���Ďg�p���܂��B
  
  �p�����[�^�F
   ����1�F���ʂ�������ϐ�
   ����2�F�Ώۂ̕�����
  
  �g�p��
   �������J�E���g 1 N[1]
   CountStringlength 1 hahaha
   CntLen 1 
  ===========================================================================
  �����̔��](English�FReverseString)
  �Ώۂ̕�������t�]�����A�w��̕ϐ��ɑ�����܂��B
  �ϐ��̎w��ɂ��āA�C�x���g�G�f�B�^�̃R�}���h�Ɠ���#0001�Ȃǂ��g�p�ł��܂��B
  �������[V]��JS[X]JS�Ȃǂ̐��䕶�����g�p�\�ł��B
  �v���O�C���R�}���h��[�����̔��]]��������[ReverseString]��[RevStr]���L�q���Ďg�p���܂��B
  �p�����[�^�F
   ����1�F���ʂ�������ϐ�
   ����2�F�Ώۂ̕�����
  �g�p��
   �����̔��] 1 N[1]
   ReverseString 1 �t�ǂ݂ł��邩�ȁH
   RevStr 1 �ł���Ǝv����H
  ===========================================================================
  �����Z�[�u(English�FForce_Save)
   �Z�[�u��ʂ�����ɋ����I�ɏ�Ԃ��Z�[�u���܂��B
   �X�V�����Z�[�u�t�@�C���́A�Ō�ɃZ�[�u or ���[�h�����t�@�C���ɂȂ�܂��B
   �j���[�Q�[�����璼�ڃZ�[�u�����ꍇ�͋󂫂�T���܂����A�󂫂��Ȃ����
   �����Ƃ��Â��t�@�C�����㏑�����܂��B
  �p�����[�^�F
   �Ȃ�
  �g�p��
   �����Z�[�u
   Force_Save
  ===========================================================================
  �w��ʒu�ɃA�j���[�V�����\��(English�FShow_Animation)
   ��ʏ�̍��W���w�肵�ăA�j���[�V�������Đ����܂��B
  �p�����[�^�F
   ����1�FX���W
   ����2�FY���W
   ����3�F�A�j���[�V����ID
   ����4�F�E�F�C�g�t���O�i�w�肷��ꍇ�u�E�F�C�g����v�j
  �g�p��
   �w��ʒu�ɃA�j���[�V�����\�� 320 240 1 �E�F�C�g����
   Show_Animation v[1] v[2] 1
  ===========================================================================
  �w��ʒu�Ƀ��[�v�A�j���[�V�����\��(English�FShow_Loop_Animation)
   ��ʏ�̍��W���w�肵�ăA�j���[�V�������Đ����܂��B
   �������邩�V���ȃA�j���[�V�������w�肷��܂Ń��[�v�Đ�����܂��B
  �p�����[�^�F
   ����1�FX���W
   ����2�FY���W
   ����3�F�A�j���[�V����ID
  �g�p��
   �w��ʒu�Ƀ��[�v�A�j���[�V�����\�� 320 240 1
   Show_Loop_Animation v[1] v[2] 1
  ===========================================================================
  ���[�v�A�j���[�V��������(English�FErase_Loop_Animation)
   ���[�v�Đ����Ă���A�j���[�V�������������܂��B
  �p�����[�^�F
   �Ȃ�
  �g�p��
   ���[�v�A�j���[�V��������
   Erase_Loop_Animation
  ===========================================================================
 

(function(){
    'use strict';
    
    ���䕶���̊g��
    Game_Interpreter.prototype.pluginCommandBook_unescape = function(text) {
        �S�p�����𔼊p�����ɕϊ�����
        var wstringToString = function(text) {
            text = text.replace([�O-�X]g, function(c) {
                return String.fromCharCode(c.charCodeAt(0) - 0xFEE0);
            });
            return text;
        };
        var getActorName = function(n) {
            var actor = n = 1  $gameActors.actor(n)  null;
            return actor  actor.name()  '';
        };
        var getPartyMemberName = function(n) {
            var actor = n = 1  $gameParty.members()[n - 1]  null;
            return actor  actor.name()  '';
        };
        var prevText = ;
        text = text.replace(g, 'x1b');
        while (prevText != text) {
            prevText = text;
            text = text.replace(x1bx1bg, '');
            text = text.replace(x1bV[([�O-�Xd]+)]gi, function() {
                return $gameVariables.value(parseInt(wstringToString(arguments[1]), 10));
            }.bind(this));
            text = text.replace(x1bN[([�O-�Xd]+)]gi, function() {
                return getActorName(parseInt(wstringToString(arguments[1]), 10));
            }.bind(this));
            text = text.replace(x1bP[([�O-�Xd]+)]gi, function() {
                return getPartyMemberName(parseInt(wstringToString(arguments[1]), 10));
            }.bind(this));
            text = text.replace(x1bGgi, TextManager.currencyUnit);
            text = text.replace(x1bIn[([�O-�Xd]+)]gi, function() {
                return $dataItems[parseInt(wstringToString(arguments[1]), 10)].name;
            }.bind(this));
            text = text.replace(x1bNi[([�O-�Xd]+)]gi, function() {
                return $dataItems[parseInt(wstringToString(arguments[1]), 10)].name;
            }.bind(this));
            text = text.replace(x1bIp[([�O-�Xd]+)]gi, function() {
                return $dataItems[parseInt(wstringToString(arguments[1]), 10)].price;
            }.bind(this));
            text = text.replace(x1bPi[([�O-�Xd]+)]gi, function() {
                return $dataItems[parseInt(wstringToString(arguments[1]), 10)].price;
            }.bind(this));
            text = text.replace(x1bSn[([�O-�Xd]+)]gi, function() {
                return $dataSkills[parseInt(wstringToString(arguments[1]), 10)].name;
            }.bind(this));
            text = text.replace(x1bNs[([�O-�Xd]+)]gi, function() {
                return $dataSkills[parseInt(wstringToString(arguments[1]), 10)].name;
            }.bind(this));
            text = text.replace(x1bNc[([�O-�Xd]+)]gi, function() {
                return $dataClasses[parseInt(wstringToString(arguments[1]), 10)].name;
            }.bind(this));
            text = text.replace(x1bNt[([�O-�Xd]+)]gi, function() {
                return $dataStates[parseInt(wstringToString(arguments[1]), 10)].name;
            }.bind(this));
            text = text.replace(x1bNw[([�O-�Xd]+)]gi, function() {
                return $dataWeapons[parseInt(wstringToString(arguments[1]), 10)].name;
            }.bind(this));
            text = text.replace(x1bNa[([�O-�Xd]+)]gi, function() {
                return $dataArmors[parseInt(wstringToString(arguments[1]), 10)].name;
            }.bind(this));
            text = text.replace(x1bJs[(.)]x1bJsgi, function() {
                try{
                    var value = eval(arguments[1]);
                    if (value != null){return value}else{
                        console.log('���䕶�� JS �̃p�����[�^�ŃG���[  �ڍׁF�]���l������(null or undefined)');
                        return 0;
                    }
                } catch(ex){
                    console.log( '���䕶�� JS �̃p�����[�^�ŃG���[  �ڍׁF ' + ex.toString());
                    return 0;
                }
            }.bind(this));
        }
        text = text.replace(x1bGgi, TextManager.currencyUnit);
        return text;
    };

    
      �����Ȑ��l�`�F�b�N���s���܂��B���������l�łȂ���Η�O�𔭐�����܂��B
      �v���O�C���R�}���h�W�ł́A��O���������Ă����̏�ŃQ�[���͒��f���ꂸ
      ���s�����R�}���h�݂̂������ɂȂ�A����Ƀe�X�g�v���[�Ȃ玩���Ńf�x���b�p�c�[�����N�����܂��B
     
      @method parseIntStrict
      @param {Number} value
      @param {String} errorMessage
      @type Number
      @return {Number} ���l�ɕϊ���������
     
    var parseIntStrict = function(value, errorMessage) {
        var result = parseInt(value, 10);
        if (isNaN(result)) throw Error('�w�肵���l[' + value + ']�����l�ł͂���܂���B' + errorMessage);
        return result;
    };

    var parameters = PluginManager.parameters('TkoolMV_PluginCommandBook');

    var _Game_Interpreter_pluginCommand      = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if (command.length == 0) {
            return;
        }

         �R�}���h�̎��s
        this.executePluginCommand(command, args);
    };

    Game_Interpreter.prototype.executePluginCommand = function(command, args) {
        var methodName = 'pluginCommandBook_' + command;
        if (typeof this[methodName] === 'function') {
             �����p�����[�^�̐��䕶���ł̕ϊ�
            for (var i=0; iargs.length; i++) {
                args[i] = Game_Interpreter.prototype.pluginCommandBook_unescape(args[i]);
            }
            try {
                this[methodName](args);
            } catch (e) {
                if ($gameTemp.isPlaytest() && Utils.isNwjs()) {
                    var window = require('nw.gui').Window.get();
                    if (!window.isDevToolsOpen()) {
                        var devTool = window.showDevTools();
                        devTool.moveTo(0, 0);
                        devTool.resizeTo(Graphics.width, Graphics.height);
                        window.focus();
                    }
                }
                console.log('�v���O�C���R�}���h�̎��s���ɃG���[���������܂����B');
                console.log('- �R�}���h�� �@ ' + command);
                console.log('- �R�}���h����  ' + args);
                console.log('- �G���[����    ' + e.toString());
            }
        }
    };

    
      ���O�̕ύX
       ��l���̖��O��ύX����
       ����� Alec
     
       �g�p��
       ���O�̕ύX 1 ���C�A���@�@�i�A�N�^�[0001�̖��O�����C�A���ɕύX
       ���O�̕ύX 2 V[1]�@�@�@�i�A�N�^�[0002�̖��O��ϐ�0001�̓��e�ɕύX
     
    Game_Interpreter.prototype.pluginCommandBook_���O�̕ύX = function(args) {
        var actorId = args[0];  �A�N�^�[ID
        var name = args[1];  ���O
        $gameActors.actor(actorId).setName(name);
    };

    
      �Ăяo�����A�C�e���擾
       �R�����C�x���g���Ăяo�����A�C�e����ID��ϐ��ɓ����
       ����� Alec
     
       �g�p��
       �Ăяo�����A�C�e���擾 1�@�@�i�ϐ�0001�ɃR�����C�x���g���Ăяo�����A�C�e��ID������
     
    Game_Interpreter.prototype.pluginCommandBook_�Ăяo�����A�C�e���擾 = function(args) {
        var varId = parseInt(args[0]);  �ϐ�ID

         �A�C�e�����g���ĂȂ�������
        if (!$gameParty.lastItem()) {
            return;
        }
        $gameVariables.setValue(varId, $gameParty.lastItem().id);
    };

    
      �Ăяo�����X�L���擾
       �R�����C�x���g���Ăяo�����X�L����ID��ϐ��ɓ����
       ����� Alec
     
       �g�p��
       �Ăяo�����X�L���擾 1�@�@�i�ϐ�0001�ɃR�����C�x���g���Ăяo�����X�L��ID������
     
    Game_Interpreter.prototype.pluginCommandBook_�Ăяo�����X�L���擾 = function(args) {
        if (eval(String(parameters['�Ăяo�����X�L���̋L�^���g��Ȃ�']'false'))) {
            window.alert(�u�Ăяo�����X�L���擾�v���g���ɂ̓v���O�C���}�l�[�W���[����uTkoolMV_PluginCommandBook.js�v�́u�Ăяo�����X�L���̋L�^���g��Ȃ��v���u�͂��v���Ă�������);
            return;
        }
        var varId = parseInt(args[0]);  �ϐ�ID
        var skillId = 0;
        if ($gameParty.inBattle()) {
            skillId = BattleManager._subject.lastBattleSkill().id;
        } else {
            skillId = $gameParty.menuActor().lastMenuSkill().id;
        }
        $gameVariables.setValue(varId, skillId);
    };

    
      ���x���̕ύX
       �A�N�^�[�̃��x����ύX���܂��B�����ł͂Ȃ��ύX��̃��x�����w��ł��܂��B
       ����� Alec
     
       �p�����[�^
       �@�A�N�^�[��ID�i����0�Ȃ�S���j
         �ύX��̃��x��
         ���x���A�b�v�����b�Z�[�W�ŕ\�����邩�ǂ����i�\���E��\���j
     
       �g�p��
       ���x���̕ύX 1 50 �\���@�@�i�A�N�^�[0001�̃��x����50�ɕύX
       ���x���̕ύX 0 10 ��\���@�i���ԑS���̃��x����10�ɕύX�A���x���A�b�v�͕\�����Ȃ�
     
    Game_Interpreter.prototype.pluginCommandBook_���x���̕ύX = function(args) {
        var actorId = parseInt(args[0], 10);
        var level = parseInt(args[1], 10)  1;
        var show = {�\��true,��\��false,�͂�true,������false}[args[2]'�\��'];
        show = show === null  false  show;
        console.log(show);
        if (actorId == 0) {
            $gameParty.members().forEach(function(actor){
                var exp = actor.expForLevel(level);
                actor.changeExp(exp, show);
            });
        } else {
            var actor = $gameActors.actor(actorId);
            if (!actor) {
                return;
            }
            var exp = actor.expForLevel(level);
            actor.changeExp(exp, show);
        }
    };

    Game_Interpreter.prototype.pluginCommandBook_�o�C�u���[�V���� = function(args) {
        if(Utils.isMobileDevice() && typeof navigator.vibrate === 'function') {
            var frame = parseIntStrict(args[0]);
            navigator.vibrate(Math.floor(frame  1000  60));
            var wait = (args[1]  '').toUpperCase();
            if (wait === '�E�F�C�g����'  wait === 'WAIT') this.wait(frame);
        }
    };
    Game_Interpreter.prototype.pluginCommandBook_Vibration = function(args) {
        this.pluginCommandBook_�o�C�u���[�V����(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�w��ʒu�̒ʍs����擾 = function(args) {
        var x = parseIntStrict(args[1]);
        var y = parseIntStrict(args[2]);
        var value = 0;
        value += $gamePlayer.isMapPassable(x, y, 8)  1000  0;
        value += $gamePlayer.isMapPassable(x, y, 6)  100   0;
        value += $gamePlayer.isMapPassable(x, y, 2)  10    0;
        value += $gamePlayer.isMapPassable(x, y, 4)  1     0;
        $gameVariables.setValue(args[0], value);
    };
    Game_Interpreter.prototype.pluginCommandBook_Get_Location_Pass = function(args) {
        this.pluginCommandBook_�w��ʒu�̒ʍs����擾(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�X�C�b�`�̏����� = function(args) {
        var exceptionValues = [];
        args.forEach(function(arg) {
            arg = parseIntStrict(arg);
            exceptionValues[arg] = $gameSwitches.value(arg);
        });
        $gameSwitches.clear();
        args.forEach(function(arg) {
            arg = parseIntStrict(arg);
            $gameSwitches.setValue(arg, exceptionValues[arg]);
        });
    };
    Game_Interpreter.prototype.pluginCommandBook_Init_Switches = function(args) {
        this.pluginCommandBook_�X�C�b�`�̏�����(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�ϐ��̏����� = function(args) {
        var exceptionValues = [];
        args.forEach(function(arg) {
            arg = parseIntStrict(arg);
            exceptionValues[arg] = $gameVariables.value(arg);
        });
        $gameVariables.clear();
        args.forEach(function(arg) {
            arg = parseIntStrict(arg);
            $gameVariables.setValue(arg, exceptionValues[arg]);
        });
    };
    Game_Interpreter.prototype.pluginCommandBook_Init_Variables = function(args) {
        this.pluginCommandBook_�ϐ��̏�����(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�Z���t�X�C�b�`�̏����� = function(args) {
        $gameSelfSwitches.clear();
    };
    Game_Interpreter.prototype.pluginCommandBook_Init_Self_Switch = function(args) {
        this.pluginCommandBook_�Z���t�X�C�b�`�̏�����(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�Z���t�X�C�b�`�̉��u���� = function(args) {
        var mapId   = Math.max(parseIntStrict(args[0]), 1);
        var eventId = Math.max(parseIntStrict(args[1]), 1);
        var type  = args[2].toUpperCase();
        var value = args[3].toUpperCase();
        $gameSelfSwitches.setValue([mapId, eventId, type], value === 'ON');
    };
    Game_Interpreter.prototype.pluginCommandBook_Remote_Control_Self_Switch = function(args) {
        this.pluginCommandBook_�Z���t�X�C�b�`�̉��u����(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�s�N�`���̓ǂݍ��� = function(args) {
        ImageManager.loadPicture(args[0], 0);
    };
    Game_Interpreter.prototype.pluginCommandBook_Load_Picture = function(args) {
        this.pluginCommandBook_�s�N�`���̓ǂݍ���();
    };

    Game_Interpreter.prototype.pluginCommandBook_�퓬�A�j���̓ǂݍ��� = function(args) {
        var hue = parseInt(args[1], 10).clamp(0, 360);
        ImageManager.loadAnimation(args[0], hue);
    };
    Game_Interpreter.prototype.pluginCommandBook_Load_Animation = function(args) {
        this.pluginCommandBook_�퓬�A�j���̓ǂݍ���(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�V���b�g�_�E�� = function(args) {
        SceneManager.terminate();
    };
    Game_Interpreter.prototype.pluginCommandBook_Shutdown = function(args) {
        this.pluginCommandBook_�V���b�g�_�E��(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�E�F�u�T�C�g�N�� = function(args) {
        if (Utils.isNwjs()) {
            var newWindow = require('nw.gui').Window.open(args[0]);
            var x = parseInt(args[1], 10)  0;
            var y = parseInt(args[2], 10)  0;
            var width = parseInt(args[3], 10)  Graphics.width;
            var height = parseInt(args[4], 10)  Graphics.height;
            newWindow.moveTo(x, y);
            newWindow.resizeTo(width, height);
        }
    };
    Game_Interpreter.prototype.pluginCommandBook_Startup_Website = function(args) {
        this.pluginCommandBook_�E�F�u�T�C�g�N��(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�ϐ��̑��� = function(args) {
        args[0]=args[0].replace('#' ,'');
        args[1]=args[1].replace(seti,'=');
        args[1]=args[1].replace(addi,'+=');
        args[1]=args[1].replace(subi,'-=');
        args[1]=args[1].replace(multi,'=');
        args[1]=args[1].replace(divi,'=');
        args[1]=args[1].replace(modi,'%=');
        var VarId1 = parseIntStrict(args[0]);
        if(isFinite(args[2]) && args[3]!='1'){
            var Var1 = parseInt(args[2],10);
        } else {
            var Var1 = args[2];
        }
        var Var2 = $gameVariables.value(VarId1);
        switch (args[1]) {
          case '='
            $gameVariables.setValue(VarId1,Var1);
            break;
          case '+='
            $gameVariables.setValue(VarId1,Var2+Var1);
            break;
          case '-='
            Var1 =parseIntStrict(Var1);
            Var2 = parseIntStrict(Var2);
            $gameVariables.setValue(VarId1,Var2-Var1);
            break;
          case '='
            Var1 =parseIntStrict(Var1);
            Var2 = parseIntStrict(Var2);
            $gameVariables.setValue(VarId1,Var2Var1);
            break; 
          case '='
            Var1 =parseIntStrict(Var1);
            Var2 = parseIntStrict(Var2);
            $gameVariables.setValue(VarId1,(Var2-(Var2%Var1))Var1);
            break;
          case '%='
            Var1 =parseIntStrict(Var1);
            Var2 = parseIntStrict(Var2);
            $gameVariables.setValue(VarId1,Var2%Var1);
            break;
        }
    };
    Game_Interpreter.prototype.pluginCommandBook_ControlVariable = function(args) {
        this.pluginCommandBook_�ϐ��̑���(args);
    };
    Game_Interpreter.prototype.pluginCommandBook_ConVar = function(args) {
        this.pluginCommandBook_�ϐ��̑���(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�^�b�`���W�̎擾 = function(args) {
        var x, y;
        if (TouchInput.isPressed()) {
            if (args[2] === '�}�b�v���W'  args[2] === 'Map') {
                x = $gameMap.canvasToMapX(TouchInput.x);
                y = $gameMap.canvasToMapY(TouchInput.y);
            } else {
                x = TouchInput.x;
                y = TouchInput.y;
            }
        } else {
            x = -1;
            y = -1;
        }
        $gameVariables.setValue(parseIntStrict(args[0]), x);
        $gameVariables.setValue(parseIntStrict(args[1]), y);
    };
    Game_Interpreter.prototype.pluginCommandBook_Get_Touch_Info = function(args) {
        this.pluginCommandBook_�^�b�`���W�̎擾(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�}�b�v�^�b�`�֎~�̕ύX = function(args) {
        $gameSystem._mapTouchDisable = (args[0] === '�֎~'  args[0] === 'Disable');
    };
    Game_Interpreter.prototype.pluginCommandBook_Change_Map_Touch = function(args) {
        this.pluginCommandBook_�}�b�v�^�b�`�֎~�̕ύX(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�}�b�v�^�b�`�ړ������� = function(args) {
        $gameSwitches.setValue(parseIntStrict(args[0]), $gameTemp.isDestinationValid());
    };
    Game_Interpreter.prototype.pluginCommandBook_Get_Map_Touch_Moving = function(args) {
        this.pluginCommandBook_�}�b�v�^�b�`�ړ�������(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�}�b�v�^�b�`�ړ� = function(args) {
        $gameTemp.setDestination(parseInt(args[0], 10), parseInt(args[1], 10));
    };

    Game_Interpreter.prototype.pluginCommandBook_Map_Touch_Move = function(args) {
        this.pluginCommandBook_�}�b�v�^�b�`�ړ�(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�s�N�`���̈ړ� = function(args) {
        var pictureId = parseInt(args[0], 10);
        var origin = args[1] === '����'  args[1] === 'Upper_Left'  0  1;
        var x = parseIntStrict(args[2]);
        var y = parseIntStrict(args[3]);
        var scaleX = parseIntStrict(args[4]);
        var scaleY = parseIntStrict(args[5]);
        var opacity = parseIntStrict(args[6]);
        var blendMode;
        switch ((args[7]  '').toUpperCase()) {
            case '���Z'
            case 'ADDITIVE'
                blendMode = 1;
                break;
            case '���Z'
            case 'SUBTRACTIVE'
                blendMode = 2;
                break;
            default 
                blendMode = 0;
                break;
        }
        var duration = parseInt(args[8], 10);
        $gameScreen.movePicture(pictureId, origin, x, y, scaleX, scaleY, opacity, blendMode, duration);
        var wait = (args[9]  '').toUpperCase();
        if (wait === '�E�F�C�g����'  wait === 'WAIT') this.wait(duration);
    };

    Game_Interpreter.prototype.pluginCommandBook_Move_Picture = function(args) {
        this.pluginCommandBook_�s�N�`���̈ړ�(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_���l���͔͈͂̐ݒ� = function(args) {
        $gameMessage.setNumInputRange(
            parseIntStrict(args[0]).clamp(0, 99999999),
            parseIntStrict(args[1]).clamp(0, 99999999));
    };
    Game_Interpreter.prototype.pluginCommandBook_Set_Input_Num_Range = function(args) {
        this.pluginCommandBook_���l���͔͈͂̐ݒ�(args);
    };
    Game_Interpreter.prototype.pluginCommandBook_���l���̓E�B���h�E�̐ݒ� = function(args) {
        var background;
        switch (args[0].toUpperCase()) {
            case '�E�B���h�E'
            case 'WINDOW'
                background = 0;
                break;
            case '�Â�����'
            case 'DIM'
                background = 1;
                break;
            case '����'
            case 'TRANSPARENT'
                background = 2;
                break;
            default
                throw new Error('�w�i�Ɏw�肵���l['+ args[0] +']���s���ł��B');
        }
        var position;
        switch (args[1].toUpperCase()) {
            case '��'
            case 'LEFT'
                position = 0;
                break;
            case '��'
            case 'MIDDLE'
                position = 1;
                break;
            case '�E'
            case 'RIGHT'
                position = 2;
                break;
            default
                throw new Error('�ʒu�Ɏw�肵���l['+ args[1] +']���s���ł��B');
        }
        $gameMessage.setNumInputBackground(background);
        $gameMessage.setNumInputPositionType(position);
    };
    Game_Interpreter.prototype.pluginCommandBook_Set_Num_Input_Window = function(args) {
        this.pluginCommandBook_���l���̓E�B���h�E�̐ݒ�(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_���l���͗L�����̐ݒ� = function(args) {
        $gameMessage._numInputValidDigit = parseIntStrict(args[0]).clamp(1, 8);
    };
    Game_Interpreter.prototype.pluginCommandBook_Set_Num_Input_Valid_Digit = function(args) {
        this.pluginCommandBook_���l���͗L�����̐ݒ�(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�s�N�`���̗L������ = function(args) {
        var picture = $gameScreen.picture($gameScreen.realPictureId(parseIntStrict(args[1])));
        $gameSwitches.setValue(parseIntStrict(args[0]), picture != null);
    };
    Game_Interpreter.prototype.pluginCommandBook_Get_Picture_Valid = function(args) {
        this.pluginCommandBook_�s�N�`���̗L������(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�s�N�`���̕\���D��x�ݒ� = function(args) {
        var picture = $gameScreen.picture($gameScreen.realPictureId(parseIntStrict(args[0])));
        if (picture) {
            picture.setZ(parseIntStrict(args[1]));
        } else {
            throw new Error('�w�肳�ꂽ�ԍ�[' + args[0] + ']�̃s�N�`���͖����ł��B');
        }
    };
    Game_Interpreter.prototype.pluginCommandBook_Set_Picture_Priority = function(args) {
        this.pluginCommandBook_�s�N�`���̕\���D��x�ݒ�(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�s�N�`���̃g���~���O = function(args) {
        var picture = $gameScreen.picture($gameScreen.realPictureId(parseIntStrict(args[0])));
        if (picture) {
            picture.setFrameDirect(parseIntStrict(args[1]), parseIntStrict(args[2]),
                parseIntStrict(args[3]), parseIntStrict(args[4]));
        } else {
            throw new Error('�w�肳�ꂽ�ԍ�[' + args[0] + ']�̃s�N�`���͖����ł��B');
        }
    };
    Game_Interpreter.prototype.pluginCommandBook_Trimming_Picture = function(args) {
        this.pluginCommandBook_�s�N�`���̃g���~���O(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�s�N�`���̉�]�p�ݒ� = function(args) {
        var picture = $gameScreen.picture($gameScreen.realPictureId(parseIntStrict(args[0])));
        if (picture) {
            picture.setAngleDirect(parseIntStrict(args[1]));
        } else {
            throw new Error('�w�肳�ꂽ�ԍ�[' + args[0] + ']�̃s�N�`���͖����ł��B');
        }
    };
    Game_Interpreter.prototype.pluginCommandBook_Angle_Picture = function(args) {
        this.pluginCommandBook_�s�N�`���̉�]�p�ݒ�(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�����̘A�� = function(args) {
        args[0]=args[0].replace('#' ,'');
        var VarId1 = parseIntStrict(args[0]);
        var Str = String(args[1]) + String(args[2]);
        if(isFinite(Str) && args[3] == '1') Str = parseInt(Str,10);
        $gameVariables.setValue(VarId1,Str);
    };
    Game_Interpreter.prototype.pluginCommandBook_ConcatenStrings = function(args) {
        this.pluginCommandBook_�����̘A��(args);
    };
    Game_Interpreter.prototype.pluginCommandBook_CatStr = function(args) {
        this.pluginCommandBook_�����̘A��(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�����̒u�� = function(args) {
        args[0]=args[0].replace('#' ,'');
        var VarId1   = parseInt(args[0],10);
        VarId1 = parseIntStrict(VarId1);
        var Str = String(args[1]);
        var Str2 = String(args[2]);
        var Str3 = String(args[3]);
        Str = Str.replace(x1bgi);
        Str2 = Str2.replace(x1bgi);
        Str3 = Str3.replace(x1bgi);
        if (args[4] == null) args[4] = '�S��';
        args[4]=args[4].replace(fronti,'�O��');
        args[4]=args[4].replace(backi,'���');
        args[4]=args[4].replace(alli,'�S��');
        switch (args[4]){
          case '�O��'
            Str = Str.replace(Str2,Str3);
            break;
          case '���'
            Str = RvStr(Str);
            Str2 = RvStr(Str2);
            Str3 = RvStr(Str3);
            Str = Str.replace(Str2,Str3);
            Str = RvStr(Str);
            break;
          case '�S��'
          default               
            while (Str.indexOf(Str2,0) != -1 ) Str = Str.replace(Str2,Str3); 
            break;
        }
        $gameVariables.setValue(VarId1,Str);
        function RvStr(st) {
            var rv = ;
            for (var i = 0, n = st.length; i  n; i++) rv += st[n - i - 1];
            return rv;
        }
    };
    Game_Interpreter.prototype.pluginCommandBook_ReplaceStrings = function(args) {
        this.pluginCommandBook_�����̒u��(args);
    };
    Game_Interpreter.prototype.pluginCommandBook_RepStr = function(args) {
        this.pluginCommandBook_�����̒u��(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�����̐؎� = function(args) {
        args[0]=args[0].replace('#' ,'');
        var VarId1 = parseIntStrict(args[0]);
        var Str = String(args[1]);
        var Nm1 = parseIntStrict(args[2]);
        var Nm2 = args[3]
        if (Nm2.toLowerCase() == 'end'  Nm2 == '�Ō�' ) Nm2 = Str.length;
        var Nm2 = parseIntStrict(Nm2);
        if (args[4] == null) args[4] = '�O��';
        args[4]=args[4].replace(fronti,'�O��');
        args[4]=args[4].replace(backi,'���');
        switch (args[4]){
          case '�O��'
          default
            Str = Str.substring(Nm1-1,Nm1+Nm2-1);
            break;
          case '���'
            Str = Str.substring(Str.length-Nm1+1,Str.length-Nm1-Nm2+1);
            break;
        }
        $gameVariables.setValue(VarId1,Str);
    };
    Game_Interpreter.prototype.pluginCommandBook_CutStrings = function(args) {
        this.pluginCommandBook_�����̐؎�(args);
    };
    Game_Interpreter.prototype.pluginCommandBook_CutStr = function(args) {
        this.pluginCommandBook_�����̐؎�(args);
    };
    Game_Interpreter.prototype.pluginCommandBook_������v�J�E���g = function(args) {
        args[0]=args[0].replace('#' ,'');
        var VarId1 = parseIntStrict(args[0]);
        var Str = String(args[1]);
        var Str2 = String(args[2]);
        var StrCnt = 0
        var StrLen
        if (args[3] == '1') {
          StrCnt = (Str.match(new RegExp(Str2, g))[]).length;
        } else {
          while (Str.indexOf(Str2,0) != -1 ){
          StrCnt ++
          StrLen = Str.indexOf(Str2,0) + 1
          Str = Str.substring(StrLen,Str.length);
          }
        }
        $gameVariables.setValue(VarId1,StrCnt);
    };
    Game_Interpreter.prototype.pluginCommandBook_CountMatchString = function(args) {
        this.pluginCommandBook_������v�J�E���g(args);
    }; 
    Game_Interpreter.prototype.pluginCommandBook_CntStr = function(args) {
        this.pluginCommandBook_������v�J�E���g(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�����̌��� = function(args) {
        args[0]=args[0].replace('#' ,'');
        var VarId1 = parseIntStrict(args[0]);
        var Str = String(args[1]);
        var Str2 = String(args[2]);
        var StrLen
        if (args[3] == null) args[4] = '�O��';
        args[3]=args[3].replace(fronti,'�O��');
        args[3]=args[3].replace(backi,'���');
        switch (args[3]){
          case '�O��'
          default
            StrLen = Str.indexOf(Str2) + 1
            break;
          case '���'
            StrLen = Str.lastIndexOf(Str2) + 1
            break;
        }
        $gameVariables.setValue(VarId1,StrLen);
   };
   Game_Interpreter.prototype.pluginCommandBook_SearchString = function(args) {
        this.pluginCommandBook_�����̌���(args);
   };
   Game_Interpreter.prototype.pluginCommandBook_SchStr = function(args) {
        this.pluginCommandBook_�����̌���(args);
   };
   
   Game_Interpreter.prototype.pluginCommandBook_�������J�E���g = function(args) {
        args[0]=args[0].replace('#' ,'');
        var VarId1 = parseIntStrict(args[0]);
        var Str = String(args[1]);
        var StrLen = Str.length
        $gameVariables.setValue(VarId1,StrLen);
   };
   Game_Interpreter.prototype.pluginCommandBook_CountStringlength = function(args) {
        this.pluginCommandBook_�������J�E���g(args);
   };
   Game_Interpreter.prototype.pluginCommandBook_SchStr = function(args) {
        this.pluginCommandBook_�������J�E���g(args);
   };
   
   Game_Interpreter.prototype.pluginCommandBook_�����̔��] = function(args) {
        args[0]=args[0].replace('#' ,'');
        var VarId1 = parseIntStrict(args[0]);
        var Str = String(args[1]);
        var RevStr = ;
        for (var i = 0, n = Str.length; i  n; i++) RevStr += Str[n - i - 1];
        $gameVariables.setValue(VarId1,RevStr);
   };
   
 Game_Interpreter.prototype.pluginCommandBook_ReverseString = function(args) {
        this.pluginCommandBook_�����̔��](args);
   };
 Game_Interpreter.prototype.pluginCommandBook_RevStr = function(args) {
        this.pluginCommandBook_�����̔��](args);
   };

    Game_Interpreter.prototype.pluginCommandBook_�����Z�[�u = function(args) {
        $gameSystem.onBeforeSave();
        if (!DataManager.saveGame(DataManager.lastAccessedSavefileId())) {
            throw new Error('�I�I�I�Z�[�u�Ɏ��s���܂����B�Z�[�u�t�@�C���͏�������Ă��܂��B�I�I�I');
        }
    };

    Game_Interpreter.prototype.pluginCommandBook_Force_Save = function(args) {
        this.pluginCommandBook_�����Z�[�u(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�w��ʒu�ɃA�j���[�V�����\�� = function(args) {
        var x = parseIntStrict(args[0]);
        var y = parseIntStrict(args[1]);
        var id =  parseIntStrict(args[2]);
        var wait = args[3] && (args[3] === '�E�F�C�g����'  args[3].toUpperCase() === 'wait');
        $gameScreen.startAnimation(x, y, id, false);
        if (wait) this.wait($dataAnimations[id].frames.length  4);
    };

    Game_Interpreter.prototype.pluginCommandBook_Show_Animation = function(args) {
        this.pluginCommandBook_�w��ʒu�ɃA�j���[�V�����\��(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_�w��ʒu�Ƀ��[�v�A�j���[�V�����\�� = function(args) {
        var x = parseIntStrict(args[0]);
        var y = parseIntStrict(args[1]);
        var id =  parseIntStrict(args[2]);
        $gameScreen.startAnimation(x, y, id, true);
    };

    Game_Interpreter.prototype.pluginCommandBook_Show_Loop_Animation = function(args) {
        this.pluginCommandBook_�w��ʒu�Ƀ��[�v�A�j���[�V�����\��(args);
    };

    Game_Interpreter.prototype.pluginCommandBook_���[�v�A�j���[�V�������� = function(args) {
        $gameScreen.animationLoop = false;
    };

    Game_Interpreter.prototype.pluginCommandBook_Erase_Loop_Animation = function(args) {
        this.pluginCommandBook_���[�v�A�j���[�V��������(args);
    };

    
      ��������̓v���O�C���R�}���h�̎����̂��߂ɕK�v�Ȋ֐��Ȃǂ�ǉ�����
     
    var �͂� = true;
    var ������ = false;

    
      ���䕶���̊g��
       ���̃v���O�C���Ŏg���Ă��鐧�䕶���̊g����ʏ�̃E�B���h�E�ɂ��K�p���܂�
       ����� Alec
     
    if (eval(String(parameters['���䕶���̊g��']'false'))) {
        (function () {
            var Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
            Window_Base.prototype.convertEscapeCharacters = function(text) {
                text = Game_Interpreter.prototype.pluginCommandBook_unescape(text);
                return Window_Base_convertEscapeCharacters.call(this, text);
            };
        })();
    }

    if (eval(String(parameters['�X�N���v�g�ɐ��䕶���K�p']'false'))) {
        (function () {
            var _Game_Interpreter_command355 = Game_Interpreter.prototype.command355;
            Game_Interpreter.prototype.command355 = function() {
                var oldParams = [], i = 0, result, index = this._index;
                oldParams.push(this._list[index].parameters[0]);
                this._list[index].parameters[0] = this.pluginCommandBook_unescape(this._list[index].parameters[0]);
                while (this._list[index + ++i].code === 655) {
                    oldParams.push(this._list[index + i].parameters[0]);
                    this._list[index + i].parameters[0] = this.pluginCommandBook_unescape(this._list[index + i].parameters[0]);
                }
                try {
                    result = _Game_Interpreter_command355.apply(this, arguments);
                } catch(e) {
                    console.log('�X�N���v�g�̎��s���ɃG���[���������܂����B');
                    console.log('- �X�N���v�g �@ ' + this.currentCommand().parameters[0]);
                    console.log('- �G���[����    ' + e.toString());
                    result = true;
                }
                this._list[index].parameters[0] = oldParams.shift();
                i = 0;
                while (this._list[index + ++i].code === 655) {
                    this._list[index + i].parameters[0] = oldParams.shift();
                }
                return result;
            };

            var _Game_Interpreter_command111 = Game_Interpreter.prototype.command111;
            Game_Interpreter.prototype.command111 = function() {
                if (this._params[0] === 12) {
                    var oldParam = this._params[1];
                    var result;
                    this._params[1] = this.pluginCommandBook_unescape(this._params[1]);
                    try {
                        result = _Game_Interpreter_command111.apply(this, arguments);
                    } catch(e) {
                        console.log('�X�N���v�g�̎��s���ɃG���[���������܂����B');
                        console.log('- �X�N���v�g �@ ' + this._params[1]);
                        console.log('- �G���[����    ' + e.toString());
                        result = true;
                    }
                    this._params[1] = oldParam;
                } else {
                    result = _Game_Interpreter_command111.apply(this, arguments);
                }
                return result;
            };

            var _Game_Character_processMoveCommand = Game_Character.prototype.processMoveCommand;
            Game_Character.prototype.processMoveCommand = function(command) {
                if (command.code === Game_Character.ROUTE_SCRIPT) {
                    var oldParam = command.parameters[0];
                    command.parameters[0] = Game_Interpreter.prototype.pluginCommandBook_unescape(command.parameters[0]);
                    try {
                        _Game_Character_processMoveCommand.apply(this, arguments);
                    } catch(e) {
                        console.log('�X�N���v�g�̎��s���ɃG���[���������܂����B');
                        console.log('- �X�N���v�g �@ ' + command.parameters[0]);
                        console.log('- �G���[����    ' + e.toString());
                    }
                    command.parameters[0] = oldParam;
                } else {
                    _Game_Character_processMoveCommand.apply(this, arguments);
                }
            };
        })();
    }

    =============================================================================
     Game�N���X��`�̈�
    =============================================================================
    var _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function() {
        _Game_System_initialize.call(this);
        this._mapTouchDisable = false;
    };

    var _Game_Message_initialize= Game_Message.prototype.initialize;
    Game_Message.prototype.initialize = function() {
        _Game_Message_initialize.call(this);
        this._numInputBackground = 0;
        this._numInputPositionType = 1;
        this._numInputValidDigit = 1;
        this.clearNumInputRange();
    };

    Game_Message.prototype.clearNumInputRange = function() {
        this._numInputMaxValue = Infinity;
        this._numInputMinValue = -Infinity;
        this._numInputValidDigit = 1;
    };

    Game_Message.prototype.setNumInputRange = function(min, max) {
        this._numInputMaxValue = max;
        this._numInputMinValue = min;
    };

    Game_Message.prototype.setNumInputBackground = function(background) {
        this._numInputBackground = background;
    };

    Game_Message.prototype.setNumInputPositionType = function(positionType) {
        this._numInputPositionType = positionType;
    };

    Game_Message.prototype.numInputBackground = function() {
        return this._numInputBackground;
    };

    Game_Message.prototype.numInputPositionType = function() {
        return this._numInputPositionType;
    };

    var _Game_Screen_clear = Game_Screen.prototype.clear;
    Game_Screen.prototype.clear = function() {
        _Game_Screen_clear.apply(this, arguments);
        this.clearAnimation();
    };

    Game_Screen.prototype.startAnimation = function(x, y, id, loop) {
        this._animationContainerX = x;
        this._animationContainerY = y;
        this._animationId         = id;
        this._animationLoop       = loop;
    };

    Game_Screen.prototype.clearAnimation = function() {
        this._animationContainerX = 0;
        this._animationContainerY = 0;
        this._animationId         = 0;
    };

    Object.defineProperty(Game_Screen.prototype, 'animationContainerX', {
        get function() {
            return this._animationContainerX;
        },
        configurable false
    });

    Object.defineProperty(Game_Screen.prototype, 'animationContainerY', {
        get function() {
            return this._animationContainerY;
        },
        configurable false
    });

    Object.defineProperty(Game_Screen.prototype, 'animationId', {
        get function() {
            return this._animationId;
        },
        configurable false
    });

    Object.defineProperty(Game_Screen.prototype, 'animationLoop', {
        get function() {
            return this._animationLoop;
        },
        set function(value) {
            this._animationLoop = value;
        },
        configurable false
    });

    var _Game_Screen_clearPictures = Game_Screen.prototype.clearPictures;
    Game_Screen.prototype.clearPictures = function() {
        _Game_Screen_clearPictures.apply(this, arguments);
        this.needsSortPictures = false;
    };

    var _Game_Picture_initBasic = Game_Picture.prototype.initBasic;
    Game_Picture.prototype.initBasic = function() {
        _Game_Picture_initBasic.apply(this, arguments);
        this._frameX      = 0;
        this._frameY      = 0;
        this._frameWidth  = 0;
        this._frameHeight = 0;
        this.z            = 100;
    };

    Game_Picture.prototype.setZ = function(value) {
        this.z = value;
    };

    Game_Picture.prototype.setFrameDirect = function(x, y, width, height) {
        this._frameX = x;
        this._frameY = y;
        this._frameWidth = width;
        this._frameHeight = height;
    };

    Game_Picture.prototype.isValidFrame = function() {
        return this._frameX + this._frameY + this._frameWidth + this._frameHeight  0;
    };

    Game_Picture.prototype.setAngleDirect = function(value) {
        this._rotationSpeed = 0;
        this._angle = value % 360;
    };

    =============================================================================
     Scene�N���X��`�̈�
    =============================================================================
    var _Scene_Map_isMapTouchOk = Scene_Map.prototype.isMapTouchOk;
    Scene_Map.prototype.isMapTouchOk = function() {
        return (!$gameSystem._mapTouchDisable  $gameTemp.isDestinationValid()) && _Scene_Map_isMapTouchOk.call(this);
    };

    =============================================================================
     Window�N���X��`�̈�
    =============================================================================
    var _Window_NumberInput_refresh = Window_NumberInput.prototype.refresh;
    Window_NumberInput.prototype.refresh = function() {
        if (this._number != null) this._number = this._number.clamp(
            $gameMessage._numInputMinValue, $gameMessage._numInputMaxValue);
        _Window_NumberInput_refresh.apply(this, arguments);
    };

    var _Window_NumberInput_start = Window_NumberInput.prototype.start;
    Window_NumberInput.prototype.start = function() {
        _Window_NumberInput_start.apply(this, arguments);
        this.updateBackground();
    };

    var _Window_NumberInput_processOk = Window_NumberInput.prototype.processOk;
    Window_NumberInput.prototype.processOk = function() {
        _Window_NumberInput_processOk.apply(this, arguments);
        $gameMessage.clearNumInputRange();
    };

    var _Window_NumberInput_updatePlacement = Window_NumberInput.prototype.updatePlacement;
    Window_NumberInput.prototype.updatePlacement = function() {
        _Window_NumberInput_updatePlacement.apply(this, arguments);
        var positionType = $gameMessage.numInputPositionType();
        this.width = this.windowWidth();
        switch (positionType) {
            case 0
                this.x = 0;
                break;
            case 1
                this.x = (Graphics.boxWidth - this.width)  2;
                break;
            case 2
                this.x = Graphics.boxWidth - this.width;
                break;
        }
    };

    var _Window_NumberInput_changeDigit = Window_NumberInput.prototype.changeDigit;
    Window_NumberInput.prototype.changeDigit = function(up) {
        if (this.maxItems() - this.index()  $gameMessage._numInputValidDigit) {
            return;
        }
        _Window_NumberInput_changeDigit.apply(this, arguments);
    };

    Window_NumberInput.prototype.updateBackground = function() {
        this._background = $gameMessage.numInputBackground();
        this.setBackgroundType(this._background);
    };

    =============================================================================
     Sprite�N���X��`�̈�
    =============================================================================
    var _Sprite_Picture_initialize = Sprite_Picture.prototype.initialize;
    Sprite_Picture.prototype.initialize = function(pictureId) {
        _Sprite_Picture_initialize.apply(this, arguments);
        this.z = 0;
    };

    var _Sprite_Picture_update = Sprite_Picture.prototype.update;
    Sprite_Picture.prototype.update = function() {
        _Sprite_Picture_update.call(this);
        if (this.visible) {
            var newZ = this.picture().z;
            if (newZ != this.z) {
                this.z = newZ;
                $gameScreen.needsSortPictures = true;
            }
            this.updateFrame();
        }
    };

    Sprite_Picture.prototype.updateFrame = function() {
        if (this.picture().isValidFrame()) {
            var p = this.picture();
            this.setFrame(p._frameX, p._frameY, p._frameWidth, p._frameHeight);
        }
    };

    var _Spriteset_Base_createUpperLayer = Spriteset_Base.prototype.createUpperLayer;
    Spriteset_Base.prototype.createUpperLayer = function() {
        _Spriteset_Base_createUpperLayer.apply(this, arguments);
        this.createAnimationContainer();
    };

    Spriteset_Base.prototype.createAnimationContainer = function() {
        this._animationContainer = new Sprite_Base();
        this._animationId = 0;
        this.addChild(this._animationContainer);
    };

    var _Spriteset_Base_update = Spriteset_Base.prototype.update;
    Spriteset_Base.prototype.update = function() {
        _Spriteset_Base_update.call(this);
        if ($gameScreen.needsSortPictures) {
            this.sortPictures();
            $gameScreen.needsSortPictures = false;
        }
        this.updateAnimationContainer();
    };

    Spriteset_Base.prototype.updateAnimationContainer = function() {
        var id = $gameScreen.animationId;
        if (id  0 && id  $dataAnimations.length) {
            this._animationContainer.x = $gameScreen.animationContainerX;
            this._animationContainer.y = $gameScreen.animationContainerY;
            this._animationContainer.startAnimation($dataAnimations[id], false, 0);
            this._animationId = id;
            $gameScreen.clearAnimation();
        }
        if (!this._animationContainer.isAnimationPlaying() && this._animationId  0) {
            if ($gameScreen.animationLoop) {
                this._animationContainer.startAnimation($dataAnimations[this._animationId], false, 0);
            } else {
                this._animationId = 0;
            }
        }
    };

    Spriteset_Base.prototype.sortPictures = function() {
        this._pictureContainer.children.sort(this._comparePictureChildOrder.bind(this));
    };

    Spriteset_Base.prototype._comparePictureChildOrder = function(a, b) {
        if (a.z !== b.z) {
            return a.z - b.z;
        } else {
            return a._pictureId - b._pictureId;
        }
    };

})();
