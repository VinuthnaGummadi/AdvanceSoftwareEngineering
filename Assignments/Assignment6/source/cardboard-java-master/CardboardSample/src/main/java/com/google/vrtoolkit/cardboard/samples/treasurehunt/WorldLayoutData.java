/*
 * Copyright 2014 Google Inc. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.google.vrtoolkit.cardboard.samples.treasurehunt;

/**
 * Contains vertex, normal and color data.
 */
public final class WorldLayoutData {

  public static final float[] CUBE_COORDS = new float[] {
      // Front face
      -0.5f, 0.5f, 0.5f,
      -0.5f, -0.5f, 0.5f,
      0.5f, 0.5f, 0.5f,
      -0.5f, -0.5f, 0.5f,
          0.5f, -0.5f, 0.5f,
          0.5f, 0.5f, 0.5f,

      // Right face
          1f, 1f, 1f,
          1f, -1f, 1f,
          1f, 1f, -1f,
          1f, -1f, 1f,
          1f, -1f, -1f,
          1f, 1f, -1f,

      // Back face
      0.5f, 0.5f, -0.5f,
          0.5f, -0.5f, -0.5f,
      -0.5f, 0.5f, -0.5f,
          0.5f, -0.5f, -0.5f,
      -0.5f, -0.5f, -0.5f,
      -0.5f, 0.5f, -0.5f,

      // Left face
      -1.0f, 1.0f, -1.0f,
      -1f, -1f, -1f,
      -1f, 1f, 1f,
      -1.0f, -1.0f, -1.0f,
      -1f, -1f, 1f,
      -1.0f, 1.0f, 1.0f,

      // Top face
      -0.5f, 0.5f, -0.5f,
      -0.5f, 0.5f, 0.5f,
          0.5f, 0.5f, -0.5f,
      -0.5f, 0.5f, 0.5f,
          0.5f, 0.5f, 0.5f,
          0.5f, 0.5f, -0.5f,

      // Bottom face
          0.5f, -0.5f, -0.5f,
      0.5f, -0.5f, 0.5f,
      -0.5f, -0.5f, -0.5f,
      0.5f, -0.5f, 0.5f,
      -0.5f, -0.5f, 0.5f,
      -0.5f, -0.5f, -0.5f,
  };

  public static final float[] CUBE_COLORS = new float[] {
      // front, green
      0.583f, 0.771f, 0.814f, 2.0f,
      0.609f, 0.115f, 0.436f, 2.0f,
      0.327f, 0.483f, 0.844f, 2.0f,
      0.822f, 0.669f, 0.201f, 2.0f,
      0.435f, 0.602f, 0.223f, 2.0f,
      0.318f, 0.747f, 0.185f, 2.0f,

      // right, blue
      0.584f, 0.533f, 0.902f, 2.0f,
      0.645f, 0.338f, 0.923f, 2.0f,
      0.854f, 0.398f, 0.423f, 2.0f,
      0.567f, 0.3398f, 0.953f, 2.0f,
      0.456f, 0.3398f, 0.9023f, 2.0f,
      0.643f, 0.3348f, 0.523f, 2.0f,

      // back, also green
      0.743f, 0.573f, 0.265f, 2.0f,
      0.345f, 0.273f, 0.256f, 2.0f,
      0.865f, 0.324f, 0.2345f, 2.0f,
      0.456f, 0.566f, 0.435f, 2.0f,
      0.346f, 0.5346f, 0.2456f, 2.0f,
      0.254f, 0.743f, 0.573f, 2.0f,

      // left, also blue
      0.325f, 0.235f, 0.5463f, 2.0f,
      0.462f, 0.3463f, 0.3623f, 2.0f,
      0.356f, 0.568f, 0.902f, 2.0f,
      0.346f, 0.5684f, 0.346f, 2.0f,
      0.658f, 0.563f, 0.5684f, 2.0f,
      0.0f, 0.3398f, 0.9023f, 2.0f,

      // top, red
      0.836f,  0.17525f,  0.12534f, 2.0f,
      0.8375f,  0.17125f,  0.12567f, 2.0f,
      0.59375f,  0.17575f,  0.12534f, 2.0f,
      0.8375f,  0.78125f,  0.12567f, 2.0f,
      0.375f,  0.1125f,  0.1253f, 2.0f,
      0.9375f,  0.78125f,  0.1255f, 2.0f,

      // bottom, also red
      0.83575f,  0.178125f,  0.12534f, 2.0f,
      0.89375f,  0.578125f,  0.125346f, 2.0f,
      0.359375f,  0.8125f,  0.12534f, 2.0f,
      0.9375f,  0.8125f,  0.125234f, 2.0f,
      0.9375f,  0.1755f,  0.125643f, 2.0f,
      0.43675f,  0.78125f,  0.125346f, 2.0f,
  };

  public static final float[] CUBE_FOUND_COLORS = new float[] {
      // front, yellow
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,

      // right, yellow
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,

      // back, yellow
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,

      // left, yellow
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,

      // top, yellow
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,

      // bottom, yellow
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
      1.0f,  0.6523f, 0.0f, 1.0f,
  };

  public static final float[] CUBE_NORMALS = new float[] {
      // Front face
      0.0f, 0.0f, 1.0f,
      0.0f, 0.0f, 1.0f,
      0.0f, 0.0f, 1.0f,
      0.0f, 0.0f, 1.0f,
      0.0f, 0.0f, 1.0f,
      0.0f, 0.0f, 1.0f,

      // Right face
      1.0f, 0.0f, 0.0f,
      1.0f, 0.0f, 0.0f,
      1.0f, 0.0f, 0.0f,
      1.0f, 0.0f, 0.0f,
      1.0f, 0.0f, 0.0f,
      1.0f, 0.0f, 0.0f,

      // Back face
      0.0f, 0.0f, -1.0f,
      0.0f, 0.0f, -1.0f,
      0.0f, 0.0f, -1.0f,
      0.0f, 0.0f, -1.0f,
      0.0f, 0.0f, -1.0f,
      0.0f, 0.0f, -1.0f,

      // Left face
      -1.0f, 0.0f, 0.0f,
      -1.0f, 0.0f, 0.0f,
      -1.0f, 0.0f, 0.0f,
      -1.0f, 0.0f, 0.0f,
      -1.0f, 0.0f, 0.0f,
      -1.0f, 0.0f, 0.0f,

      // Top face
      0.0f, 1.0f, 0.0f,
      0.0f, 1.0f, 0.0f,
      0.0f, 1.0f, 0.0f,
      0.0f, 1.0f, 0.0f,
      0.0f, 1.0f, 0.0f,
      0.0f, 1.0f, 0.0f,

      // Bottom face
      0.0f, -1.0f, 0.0f,
      0.0f, -1.0f, 0.0f,
      0.0f, -1.0f, 0.0f,
      0.0f, -1.0f, 0.0f,
      0.0f, -1.0f, 0.0f,
      0.0f, -1.0f, 0.0f
  };

  public static final float[] FLOOR_COORDS = new float[] {
      200f, 0, -200f,
      -200f, 0, -200f,
      -200f, 0, 200f,
      200f, 0, -200f,
      -200f, 0, 200f,
      200f, 0, 200f,
  };

  public static final float[] FLOOR_NORMALS = new float[] {
      0.0f, 1.0f, 0.0f,
      0.0f, 1.0f, 0.0f,
      0.0f, 1.0f, 0.0f,
      0.0f, 1.0f, 0.0f,
      0.0f, 1.0f, 0.0f,
      0.0f, 1.0f, 0.0f,
  };

  public static final float[] FLOOR_COLORS = new float[] {
      0.0f, 0.3398f, 0.9023f, 1.0f,
      0.0f, 0.3398f, 0.9023f, 1.0f,
      0.0f, 0.3398f, 0.9023f, 1.0f,
      0.0f, 0.3398f, 0.9023f, 1.0f,
      0.0f, 0.3398f, 0.9023f, 1.0f,
      0.0f, 0.3398f, 0.9023f, 1.0f,
  };
}
